import ButtonLogin from "../components/ButtonLogin";
import ListItem from "../components/ListItem";
import FAQListItem from "../components/FAQListItem";

export default function Home() {
	const isLoggedin = true;
	const name = "JoshthDev";

	const pricing = [
		"Collect customer feedback",
		"Unlimited boards",
		"Admin dashboard",
		"24/7 support",
	];
	return (
		<main>
			{/* HEADER */}
			<section className="bg-base-200">
				<div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
					<div className="font-bold">LouDsImplicitY</div>
					<div className="space-x-4 max-md:hidden">
						<a className="link link-hover" href="#pricing">Pricing</a>
						<a className="link link-hover" href="#faq">FAQ</a>
					</div>
				</div>
			</section>
			{/* HERO */}
			<section className="px-8 text-center py-32 max-w-3xl mx-auto">
				<h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
					Collect customer feedback to build better products
				</h1>
				<div className="opacity-90 mb-10">
					Create a feedback board in minutes, prioritize features, and build
					products your customers will love.
				</div>
				<ButtonLogin isLoggedin={isLoggedin} name={name} />
			</section>

			{/* PRICING */}
			<section className="bg-base-200" id="pricing">
				<div className="py-32 px-8 max-w-3xl mx-auto text-center">
					<p className="text-sm uppercase font-medium text-center text-primary mb-4">
						Pricing
					</p>
					<h2 className="text-3xllg:text-4xl font-extrabold mb-12 text-center">
						A pricing that adapts to your needs
					</h2>

					<div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
						<div className="flex gap-2 items-baseline">
							<div className="text-4xl font-black">$19</div>
							<div className="uppercase text-sm font-medium opacity-60">
								/month
							</div>
						</div>

						<ul className="space-y-2">
							{pricing.map((item) => (
								<ListItem key={item} priceitem={item} />
							))}
						</ul>

						<ButtonLogin
							isLoggedin={isLoggedin}
							name={name}
							extraStyle="w-full"
						/>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-base-200" id="faq">
				<div className="px-8 py-32 max-w-3xl mx-auto">
					<p className="text-sm uppercase font-medium text-center text-primary mb-4">
						FAQ
					</p>
					<h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
						Frequently asked questions
					</h2>

					<ul className="max-w-lg mx-auto">
						{[
							{ question: "What do I get exactly?", answer: "Absolutely" },
							{ question: "Can I get a refund?", answer: "Defintely you can" },
							{ question: "I have another question", answer: "Sure go ahead" },
						].map((qa) => (
							<FAQListItem key={qa.question} qa={qa} />
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}
