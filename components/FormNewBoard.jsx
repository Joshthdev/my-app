"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const FormNewBoard = () => {
	const router = useRouter();
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (isLoading) {
			return;
		}

		setIsLoading(true);

		try {
			const data = await axios.post("/api/board", { name });

			setName("");

			toast.success("Board created!");

			router.refresh();
			// 2. Redirect to dedicated board page
		} catch (error) {
			const errorMessage =
				error.response?.data?.error || error.message || "Something went wrong";

			toast.error(errorMessage);
			//1. Display error message
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form
			className="bg-base-200 p-8 rounded-3xl space-y-8"
			onSubmit={handleSubmit}
		>
			<p className="text-lg font-bold">Create a new feedback board</p>
			<label className="form-control w-full">
				<div className="label">
					<span className="label-text">Board name</span>
				</div>
				<input
					required
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
			</label>

			<button className="btn btn-primary w-full" type="submit">
				{isLoading && (
					<span>
						<span className="loading loading-spinner loading-xs"></span>
					</span>
				)}
				Create board
			</button>
		</form>
	);
};

export default FormNewBoard;
