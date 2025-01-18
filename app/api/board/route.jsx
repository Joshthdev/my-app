import { NextResponse } from "next/server";
import { auth } from "@/auth";
import User from "@/models/User";
import Board from "@/models/Board";
import connectMongo from "@/libs/mongoose";

export async function POST(req) {
	try {
		const body = await req.json();

		if (!body.name) {
			return NextResponse.json(
				{ error: "Board name is required" },
				{ status: 400 }
			);
		}

		const session = await auth();

		if (!session) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		await connectMongo();

		const user = await User.findById(session.user.id);

		const board = await Board.create({
			name: body.name,
			userId: user._id,
		});

		user.boards.push(board._id);
		await user.save();

		return NextResponse.json(board);
	} catch (e) {
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}
