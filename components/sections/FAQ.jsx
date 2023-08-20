import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQs } from '@/utils/constants';

const AccordionGroup = () => {
	return (
		<Accordion type="single" collapsible className="w-full max-w-3xl">
			{FAQs.map((faq, key) => (
				<AccordionItem value={key + 1} key={key}>
					<AccordionTrigger className="font-semibold hover:no-underline ">{faq.question || `Is it accessible?`}</AccordionTrigger>
					<AccordionContent>{faq.answer || `Yes. It adheres to the WAI-ARIA design pattern.`}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export const FAQ = () => {
	return (
		<>
			<section className="relative z-10 flex flex-col items-center justify-between w-full p-2 overflow-hidden py-28 gap-y-10 sm:gap-y-14 sm:px-16">
				<div className="flex flex-col justify-between w-full gap-8 mx-auto md:flex-row">
					<div className="flex flex-col justify-between w-full gap-10 sm:w-1/4">
						<h3 className="w-full text-5xl font-extrabold xl:text-6xl font-SpaceX">FAQ&apos;s</h3>

						<p className="w-full break-words">
							Our goal is to provide our users with the best possible trading experience. For more in-depth questions on using our platform please
							read through our documentation or reach out to us in our official Telegram channels where we will be more than happy to assist you!
						</p>
					</div>
					<AccordionGroup />
				</div>
			</section>
		</>
	);
};

export default FAQ;
