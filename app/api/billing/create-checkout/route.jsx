import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Stripe from "stripe";

export async function POST(req) {
	try {
		const body = await req.json();

		if (!body.successUrl || !body.cancelUrl) {
			return NextResponse.json(
				{ error: "Missing successUrl or cancelUrl" },
				{ status: 400 }
			);
		}

		const session = await auth();

		await connectMongo();

		const user = await User.findById(session.user.id);

		const stripe = new Stripe(process.env.STRIPE_API_KEY);

		const stripeCheckoutSession = await stripe.checkout.sessions.create({
			mode: "subscription",
			line_items: [
				{
					price: process.env.STRIPE_PRICE_ID,
					quantity: 1,
				},
			],
			success_url: body.successUrl,
			cancel_url: body.cancelUrl,
			customer_email: user.email,
			client_reference_id: user._id.toString(),
		});

		return NextResponse.json({ url: stripeCheckoutSession.url });
	} catch (error) {
		console.error("stripe error: " + error?.message);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
