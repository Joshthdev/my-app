import Link from "next/link";

export default async function Success() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen gap-4">
			<h1 className="text-4xl font-bold">Success</h1>
			<Link href="/dashboard" className="btn btn-primary">
				Go to Dashboard
			</Link>
		</main>
	);
}
