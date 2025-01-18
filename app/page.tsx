import ButtonLogin from "../components/ButtonLogin";
import ListItem from "../components/ListItem";
import FAQListItem from "../components/FAQListItem";
import productDemo from "@/app/productDemo.jpeg";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Home() {
	const session = await auth();

	const pricing = [
		"Collect customer feedback efficiently",
		"Unlimited boards",
		"Admin dashboard",
		"24/7 support",
	];

	return (
		<main>
			{/* HEADER */}
			<section className="bg-base-100">
				<div className="flex justify-between items-center px-8 py-4 max-w-5xl mx-auto">
					<div className="font-bold text-base-content">Datafyy</div>
					<div className="space-x-4 max-md:hidden">
						<a
							className="link link-hover text-base-content hover:text-primary"
							href="#pricing"
						>
							Pricing
						</a>
						<a
							className="link link-hover text-base-content hover:text-primary"
							href="#faq"
						>
							FAQ
						</a>
					</div>
					<ButtonLogin session={session} extraStyle="w-86" />
				</div>
			</section>

			{/* HERO */}
			<section className="text-center lg:text-left py-64 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
				<Image
					src={productDemo}
					alt="Product Demo"
					className="w-96 rounded-xl"
				/>

				<div>
					<h1 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-6">
						Collect customer feedback to build better products
					</h1>
					<div className="text-neutral-content mb-10">
						Create a feedback board in minutes, prioritize features, and build
						products your customers will love.
					</div>
					<ButtonLogin session={session} extraStyle="w-86" />
				</div>
			</section>

			{/* PRICING */}
			<section className="bg-base-200" id="pricing">
				<div className="py-32 px-8 max-w-3xl mx-auto text-center">
					<p className="text-sm uppercase font-medium text-primary mb-4">
						Pricing
					</p>
					<h2 className="text-3xl lg:text-4xl font-extrabold text-base-content mb-12">
						A pricing that adapts to your needs
					</h2>

					<div className="p-8 bg-base-100 shadow-md max-w-96 rounded-3xl mx-auto space-y-6">
						<div className="flex gap-2 items-baseline">
							<div className="text-4xl font-black text-base-content">$19</div>
							<div className="uppercase text-sm font-medium text-neutral-content">
								/month
							</div>
						</div>

						<ul className="space-y-2 text-base-content">
							{pricing.map((item) => (
								<ListItem key={item} priceitem={item} />
							))}
						</ul>

						<ButtonLogin session={session} extraStyle="w-full" />
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-base-200" id="faq">
				<div className="px-8 py-32 max-w-3xl mx-auto">
					<p className="text-sm uppercase font-medium text-primary mb-4 text-center">
						FAQ
					</p>
					<h2 className="text-3xl lg:text-4xl font-extrabold text-base-content mb-12 text-center">
						Frequently asked questions
					</h2>

					<ul className="max-w-lg mx-auto text-base-content">
						{[
							{
								question: "What do I get exactly?",
								answer:
									"An all-in-one solution to boost productivity and gain deeper customer insights.",
							},
							{
								question: "Can I get a refund?",
								answer:
									"Refunds are available after a 48-hour processing period.",
							},
							{
								question: "I have another question",
								answer:
									"For any additional questions, our 24/7 support team is always here to help.",
							},
						].map((qa) => (
							<FAQListItem key={qa.question} qa={qa} />
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}
