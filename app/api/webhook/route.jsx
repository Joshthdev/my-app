import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
	try {
		const stripe = new Stripe(process.env.STRIPE_API_KEY);

		const body = await req.text();
		const signature = headers().get("stripe-signature");
		const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

		const event = stripe.webhooks.constructEvent(
			body,
			signature,
			webhookSecret
		);

		const { type, data } = event;

		if (type === "checkout.session.completed") {
			// Grant access to product

			await connectMongo();

			const user = await User.findById(data.object.client_reference_id);

			user.hasAccess = true;
			user.customerId = data.object.customer;

			await user.save();
		} else if (type === "customer.subscription.deleted") {
			await connectMongo();

			const user = await User.findOne({
				customerId: data.object.customer,
			});
			user.hasAccess = false;

			await user.save();
		}
	} catch (e) {
		console.error("stripe error: " + e?.message);
	}

	return NextResponse.json({});
}
