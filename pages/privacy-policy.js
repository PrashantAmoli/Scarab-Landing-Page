import { Footer } from '@/components/sections/Footer';
import Reveal from '@/components/animations/Reveal';
import GradientBox from '@/components/elements/GradientBox';
import Head from 'next/head';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export const PrivacyPolicy = () => {
	const scrollRef = useRef(null);
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Head>
				<title>Privacy Policy</title>
			</Head>

			<main className="relative flex flex-col items-center justify-center min-h-screen snap-proximity snap snap-y" ref={scrollRef}>
				<Switch
					checked={theme === 'light' ? true : false}
					onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					className="fixed z-40 scale-110 sm:scale-125 top-14 sm:top-5 right-2 sm:right-4 dark:bg-white"
				/>

				<GradientBox>
					<nav className="absolute right-0 z-30 flex flex-col items-center justify-between w-full sm:flex-row w-70 top-3 sm:right-20 sm:w-10/12 lg:w-11/12">
						<Link href="/">
							<h1 className="text-3xl font-SpaceX">Boomtechinc</h1>
						</Link>

						<Button className="w-40 py-1 capitalize transition-all rounded-lg shadow-2xl px-9 h-9 shadow-blue-600 hover:cursor-pointer hover:scale-x-105 hover:shadow-2xl hover:shadow-blue-500">
							Get Started
						</Button>
					</nav>

					<article className="flex flex-col w-11/12 max-w-6xl gap-5 mx-auto my-10 mt-32">
						<h1 className="mb-1 text-2xl font-extrabold tracking-widest sm:text-4xl font-SpaceX">PRIVaCy POLICy</h1>

						<div className="w-full mx-auto h-0.5 mb-5 bg-gray-500"></div>

						<p className="w-full tracking-widest break-words">
							THIS PRIVACY POLICY IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC CONTRACT FORMED UNDER THE INFORMATION TECHNOLOGY ACT, 2000 AND
							THE RULES MADE THEREUNDER AND THE AMENDED PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES AS AMENDED BY THE
							INFORMATION TECHNOLOGY ACT, 2000. THIS PRIVACY POLICY DOES NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR DIGITAL SIGNATURE.
						</p>

						<p className="w-full tracking-widest break-words ">
							THIS DOCUMENT IS PUBLISHED AND SHALL BE CONSTRUED IN ACCORDANCE WITH THE PROVISIONS OF THE INFORMATION TECHNOLOGY (REASONABLE SECURITY
							PRACTICES AND PROCEDURES AND SENSITIVE PERSONAL DATA OF INFORMATION) RULES, 2011 UNDER INFORMATION TECHNOLOGY ACT, 2000; THAT REQUIRE
							PUBLISHING OF THE PRIVACY POLICY FOR COLLECTION, USE, STORAGE AND TRANSFER OF SENSITIVE PERSONAL DATA OR INFORMATION.
						</p>

						<p className="w-full tracking-widest break-words ">
							THIS PRIVACY POLICY IS A LEGALLY BINDING DOCUMENT BETWEEN YOU AND SALESROBOT APPLICATION (BOTH TERMS DEFINED BELOW). THE TERMS OF THIS
							PRIVACY POLICY WILL BE EFFECTIVE UPON YOUR ACCEPTANCE OF THE SAME (DIRECTLY OR INDIRECTLY IN ELECTRONIC FORM, BY CLICKING ON THE &quot;I
							ACCEPT&uot; TAB OR BY USE OR THE WEBSITE OR BY OTHER MEANS) AND WILL GOVERN THE RELATIONSHIP BETWEEN YOU AND SALESROBOT APPLICATION FOR
							YOUR USE OF THE WEBSITE (DEFINED BELOW).
						</p>

						<p className="w-full tracking-widest break-words ">
							PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY USING THE WEBSITE, YOU INDICATE THAT YOU UNDERSTAND, AGREE AND CONSENT TO THIS PRIVACY
							POLICY. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT USE THIS WEBSITE. YOU HEREBY PROVIDE YOUR UNCONDITIONAL
							CONSENT OR AGREEMENTS TO SALESROBOT APPLICATION AS PROVIDED UNDER SECTION 43A AND SECTION 72A OF INFORMATION TECHNOLOGY ACT, 2000.
						</p>

						<p className="w-full tracking-widest break-words ">
							By providing us Your Information or by making use of the facilities provided by the Website, you hereby consent to the collection,
							storage, processing and transfer of any or all of Your Personal Information and Non-Personal Information by SALESROBOT Application as
							specified under this Privacy Policy. You further agree that such collection, use, storage and transfer of Your Information shall not
							cause any loss or wrongful gain to You or any other person.
						</p>

						<p className="w-full tracking-widest break-words ">
							Alice Camera Private Limited (“SALESROBOT Application” or “We” or “Us” or &quot;Our&quot;) is concerned about the privacy of the data
							and information of users (“You” or “Your” or “Yourself”) accessing the services on the SALESROBOT Application.This Privacy Policy is a
							contract between You and SALESROBOT Application.
						</p>

						<p className="w-full tracking-widest break-words ">
							This Privacy Policy shall be read together with the respective Terms of Use or other terms and condition of SALESROBOT Application.
						</p>

						<p className="w-full tracking-widest break-words ">
							This Privacy Policy is designed to tell You about Our practices regarding collection, use, and disclosure of information or data that
							You may provide via this Website. Please be sure to read this entire Privacy Policy before using or submitting information to this
							Website.
						</p>

						<p className="w-full tracking-widest break-words ">
							This Privacy Policy is designed to tell You about Our practices regarding collection, use, and disclosure of information or data that
							You may provide via this Website. Please be sure to read this entire Privacy Policy before using or submitting information to this
							Website.
						</p>

						<p className="w-full font-bold tracking-widest break-words">1. COLLECTION AND STORAGE OF INFORMATION</p>

						<p className="w-full tracking-widest break-words">
							1.1. The Information (which shall also include data) provided by You to SALESROBOT Application or collected from You by SALESROBOT
							Application may consist of &quot;Personal Information&quot; and &quot;Non-Personal Information&quot;.
						</p>

						<p className="w-full tracking-widest break-words">
							1.2. Personal Information means any information that relates to a natural person, which, either directly or indirectly, in combination
							with other information available or likely to be available with a body corporate, is capable of identifying such person . Personal
							Information for the purposes of this Privacy Policy shall include, but not be limited to Your name, address, contact number, e-mail
							address or other contact information, Information regarding your transactions on the Website, Your financial information, Internet
							Protocol address, Any other items of &quot;sensitive personal data or information&quot; as such term is defined under the Information
							Technology (Reasonable Security Practices And Procedures And Sensitive Personal Data Of Information) Rules, 2011 enacted under the
							Information Technology Act, 2000, Identification code of Your communication device which You use to access the Website or any other
							Information that You provide during Your registration process, if any, on the Website.
						</p>

						<p className="w-full tracking-widest break-words">
							1.3. Such Personal Information may be collected in various ways including during the course of You registering as a user on the Website,
							availing certain services offered on the Website. Such instances include but are not limited to participating in any online survey or
							contest or otherwise or posting user reviews or otherwise doing business on the Website.
						</p>

						<p className="w-full tracking-widest break-words">
							1.4. We may receive Personal information about You from third parties, such as social media services, commercially available sources and
							business partners. If you access Website through a social media service or connect a service on Website to a social media service, the
							information We collect may include Your user name associated with that social media service, any information or content the social media
							service has the right to share with Us, such as Your profile picture, email address or friends list, and any information You have made
							public in connection with that social media service. When You access the Website through social media services or when You connect
							Website to social media services, You are authorizing SALESROBOT Application to collect, store, and use and retain such information and
							content in accordance with this Privacy Policy.
						</p>

						<p className="w-full tracking-widest break-words">
							1.5. SALESROBOT Application may also collect information other than Personal Information from You through the Website when You visit and
							/ or use the Website. Such information may be stored in server logs. This Non-Personal Information may include Your geographic location,
							details of Your telecom service provider or internet service provider, the type of browser (Internet Explorer, Firefox, Opera, Google
							Chrome etc.), the operating system of Your system, device and the Website You last visited before visiting the Website or the duration
							of Your stay on the Website is also stored in the session along with the date and time of Your access.
						</p>

						<p className="w-full tracking-widest break-words">
							1.6. Non-Personal Information is collected through various ways such through the use of cookies. SALESROBOT Application may store
							temporary or permanent &quot;cookies&quot; on Your computer. You can erase or choose to block these cookies from Your computer. You can
							configure Your computer’s browser to alert You when We attempt to send You a cookie with an option to accept or refuse the cookie. If
							You have turned cookies off, You may be prevented from using certain features of the Website. If they do so, note that some parts of the
							Site may not function properly.
						</p>

						<p className="w-full tracking-widest break-words">
							1.7. Please do note that Personal Information and Non-Personal Information may be treated differently as per this Privacy Policy.
							provided that, any information furnished under the Right to Information Act, 2005 or any other law for the time being in force shall not
							be regarded as personal information or information for these purposes.
						</p>

						<p className="w-full tracking-widest break-words">
							1.8. You hereby represent to SALESROBOT Application that:-the Information You provide from time to time is and shall be authentic,
							correct, current and updated and You have all the rights, permissions and consents as may be required to provide such Information to
							SALESROBOT Application.Your providing the Information to SALESROBOT Application and SALESROBOT Application’ consequent storage,
							collection, usage, transfer, access or processing of the same shall not be in violation of any third-party agreement, laws, charter
							documents, judgments, orders and decrees.
						</p>

						<p className="w-full tracking-widest break-words">
							1.9. SALESROBOT Application and its officers, directors, contractors or agents shall not be responsible for the authenticity of the
							Information that You or any other user provide to SALESROBOT Application. You shall indemnify and hold harmless SALESROBOT Application
							and its officers, directors, contractors or agents and any third party relying on the Information provided by You in the event You are
							in breach of this Privacy Policy including this provision and the immediately preceding provision above.
						</p>

						<p className="w-full tracking-widest break-words">
							1.10. Your Information will primarily be stored in electronic form however certain data can also be stored in physical form. We may
							store, collect, process and use your data in countries other than Republic of India but under compliance with applicable laws. We may
							enter into agreements with third parties (in or outside of India) to store or process your information or data. These third parties may
							have their own security standards to safeguard your information or data and we will on commercial reasonable basis require from such
							third parties to adopt reasonable security standards to safeguard your information / data.
						</p>

						<p className="w-full tracking-widest break-words">2. PURPOSE FOR COLLECTING, USING, STORING AND PROCESSING OF INFORMATION</p>

						<p className="w-full tracking-widest break-words">
							SALESROBOT Application collects, uses, stores and processes Your Information for any purpose as may be permissible under applicable laws
							(including where the applicable law provides for such collection, usage, storage or processes in accordance with the consent of the
							user) and shall include the following:
						</p>

						<p className="w-full tracking-widest break-words">2.1. to facilitate Your use of the Website;</p>
						<p className="w-full tracking-widest break-words">
							2.2. to respond to Your inquiries or fulfil Your requests for information about the various services offered on the Website;
						</p>
						<p className="w-full tracking-widest break-words">
							2.3. to provide You with information about services available on the Website and to send You information, materials, and offers;
						</p>
						<p className="w-full tracking-widest break-words">
							2.4. to send You important information regarding the Website, changes in terms and conditions, user agreements, and policies and/or
							other administrative information;
						</p>
						<p className="w-full tracking-widest break-words">2.5. to send You surveys and marketing communications;</p>
						<p className="w-full tracking-widest break-words">
							2.6. to personalize Your experience on the Website by presenting advertisements, services and offers tailored to Your preferences;
						</p>
						<p className="w-full tracking-widest break-words">
							2.7. to help You address Your problems incurred on the Website including addressing any technical problems;
						</p>
						<p className="w-full tracking-widest break-words">2.8. if You avail of any service from the Website, to complete and fulfil the same.</p>
						<p className="w-full tracking-widest break-words">2.9. to protect the integrity and for proper administering of the Website;</p>
						<p className="w-full tracking-widest break-words">2.10. to conduct internal reviews and data analysis for the Website;</p>
						<p className="w-full tracking-widest break-words">2.12. to improve the services and content on the Website;</p>
						<p className="w-full tracking-widest break-words">
							2.13. to conducting academic research, surveys, analytical studies on various aspects including user behaviour, user preferences etc.;
						</p>
						<p className="w-full tracking-widest break-words">
							2.14. to respond to legal, judicial, quasi-judicial process and provide information to law enforcement agencies or in connection with an
							investigation on matters related to public safety, as permitted by law;
						</p>
						<p className="w-full tracking-widest break-words">2.15. to implement information security practices;</p>
						<p className="w-full tracking-widest break-words">2.16. to determine any security breaches, computer contaminant or computer virus;</p>
						<p className="w-full tracking-widest break-words">
							2.17. to investigate, prevent, or take action regarding illegal activities and suspected fraud,
						</p>
						<p className="w-full tracking-widest break-words">
							2.18. to undertake forensics of the concerned computer resource as a part of investigation or internal audit;
						</p>
						<p className="w-full tracking-widest break-words">
							2.19. to trace computer resources or any person who may have contravened, or is suspected of having or being likely to contravene, any
							provision of law including the Information Technology Act, 2000 that is likely to have an adverse impact on the services provided on any
							Website or by SALESROBOT Application; and
						</p>
						<p className="w-full tracking-widest break-words">
							2.20. To send periodic emails - We may use the email address to send User information and updates pertaining to their order. It may also
							be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will
							receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like
							to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may
							contact us via our Site.
						</p>

						<p className="w-full tracking-widest break-words">[Individually and collectively referred to as (&quot;Purposes&quot;)]</p>

						<p className="w-full tracking-widest break-words">
							You hereby agree and acknowledge that the Information so collected is for lawful purpose connected with a function or activity of
							SALESROBOT Application or any person on its behalf, and the collection of Information is necessary for the Purposes.
						</p>

						<p className="w-full tracking-widest break-words">3. SHARING AND DISCLOSURE OF YOUR INFORMATION</p>

						<p className="w-full tracking-widest break-words">
							3.1 The Services are not available to You hereby unconditionally agree and permit that SALESROBOT Application may transfer, share,
							disclose or part with all or any of Your Information, within and outside of the Republic of India to third party service providers /
							partners / banks and financial institutions for one or more of the Purposes or as may be required by applicable law. We may use third
							party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out
							newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given
							us your permission.
						</p>

						<p className="w-full tracking-widest break-words">
							3.2. You acknowledge and agree that, to the extent permissible under applicable laws, it is adequate that when SALESROBOT Application
							transfers Your Information to any other entity within or outside Your country of residence, SALESROBOT Application will place
							contractual obligations on the transferee which will oblige the transferee to adhere to the provisions of this Privacy Policy.
						</p>

						<p className="w-full tracking-widest break-words">
							3.3. SALESROBOT Application may share statistical data and other details (other than Your Personal Information) without Your express or
							implied consent to facilitates various programmes or initiatives launched by SALESROBOT Application, its affiliates, agents, third party
							service providers, partners or banks &amp; financial institutions, from time to time. We may transfer/disclose/share Information (other
							than Your Personal Information) to those parties who support Our business, such as providing technical infrastructure services,
							analyzing how Our services are used, providing merchants services, facilitating payments, or conducting academic research and surveys.
							These affiliates and third party service providers shall adhere to confidentiality obligations consistent with this Privacy Policy.
							Notwithstanding the above, We use other third parties such as a credit/debit card processing company, payment gateway, pre-paid cards
							etc. to enable You to make payments for availing services. When You sign up for these services, You may have the ability to save Your
							card details for future reference and faster future payments. In such case, We may share Your relevant Personal Information as necessary
							for the third parties to provide such services, including Your name, residence and email address. The processing of payments or
							authorization is solely in accordance with these third parties policies, terms and conditions and We are not in any manner responsible
							or liable to You or any third party for any delay or failure at their end in processing the payments.
						</p>

						<p className="w-full tracking-widest break-words">
							3.4 We may also share Personal Information if We believe it is necessary in order to investigate, prevent, or take action regarding
							illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of various
							terms and conditions or our policies.
						</p>

						<p className="w-full tracking-widest break-words">
							3.5. We reserve the right to disclose your information when required to do so by law or regulation, or under any legal obligation or
							order under law or in response to a request from a law enforcement or governmental agency or judicial, quasi-judicial or any other
							statutory or constitutional authority or to establish or exercise our legal rights or defend against legal claims.
						</p>

						<p className="w-full tracking-widest break-words">
							3.6. You further agree that such disclosure, sharing and transfer of Your Personal Information and Non-Personal Information shall not
							cause any wrongful loss to You or to any third party, or any wrongful gain to Us or to any third party.
						</p>

						<p className="w-full tracking-widest break-words">
							3.7. We and Our affiliates will share / sell some or all of Your personal information with another business entity should We (or Our
							assets) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business. Should
							such a transaction occur that other business entity (or the new combined entity) will be required to follow this Privacy Policy with
							respect to Your Personal Information.
						</p>

						<p className="w-full tracking-widest break-words">4. LINK TO OTHER WEBSITES</p>

						<p className="w-full tracking-widest break-words">
							4.1. Our Website may provide links to other sites. These links are provided for Your convenience only and the provision of these links
							does not mean that sites are related or associated with Us. Please note that these Sites have their terms of use and privacy policies.
							You should check their privacy policy before You submit Your Personal Information or any other data with them. We don&rsquo;t guarantee
							the content and the security of those sites.
						</p>

						<p className="w-full tracking-widest break-words">
							4.2. We may have certain features on Our Website which may be hosted by third parties, Your interaction with such features shall be
							governed by the privacy policy of such third parties.
						</p>

						<p className="w-full tracking-widest break-words">
							4.3. We shall not be responsible for any loss, damage, claim or expense caused as a result of You accessing these third party sites and
							features.
						</p>

						<p className="w-full tracking-widest break-words">5. SECURITY</p>

						<p className="w-full tracking-widest break-words">
							5.1. We strive to ensure the security, integrity and privacy of Your Information and to protect Your Personal Information against
							unauthorized access or unauthorized alteration, disclosure or destruction. We adopt adequate measures to prevent unauthorized access to
							Your Personal Information.
						</p>

						<p className="w-full tracking-widest break-words">
							5.2. We reserve the right to conduct a security review at any time to verify Your identity. You agree to provide Us all the information
							that We request for the security review. If You fail to comply with any security request, We reserve the right terminate Your account
							with Us and prohibit Your access to the Website.
						</p>

						<p className="w-full tracking-widest break-words">
							5.3. We are not liable and cannot be held liable for any breach of security or for any actions of any third parties that receive Your
							Personal Information.
						</p>

						<p className="w-full tracking-widest break-words">
							5.4. The trademarks, logos and service marks displayed on the Website (&quot;Marks&quot;) are the property of SALESROBOT Application or
							their merchants or respective third parties. You are not permitted to use the Marks without the prior consent of SALESROBOT Application,
							the merchants or the third party that may own the Marks.
						</p>

						<p className="w-full tracking-widest break-words">
							5.5. Notwithstanding anything contained in this Policy or elsewhere, We shall not be held responsible for any loss, damage or misuse of
							Your Personal Information, if such loss, damage or misuse is attributable to a Force Majeure Event (as defined below).
						</p>

						<p className="w-full tracking-widest break-words">
							5.6. Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a
							secure way. You can verify this by looking for a lock icon in the address bar and looking for &quot;https&quot; at the beginning of the
							address of the Web page.
						</p>

						<p className="w-full tracking-widest break-words">
							A &quot;Force Majeure Event&quot; shall mean any event that is beyond Our reasonable control and shall include, without limitation,
							sabotage, fire, flood, explosion, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts
							of government, computer hacking, unauthorised access to computer data and storage device, computer crashes, breach of security and
							encryption, etc.
						</p>

						<p className="w-full tracking-widest break-words">6. CHOICE/OPT-OUT</p>

						<p className="w-full tracking-widest break-words">
							You agree and acknowledge that You are providing your Information out of your free will. You have an option not to provide or permit
							SALESROBOT Application to collect Your Personal Information or later on withdraw Your consent with respect to such Personal Information
							so provided herein by sending an email to the grievance officer or such other electronic address as may be notified to You.
						</p>

						<p className="w-full tracking-widest break-words">7. UPDATES TO THIS PRIVACY POLICY</p>

						<p className="w-full tracking-widest break-words">
							SALESROBOT Application may change the data privacy practices and update this Privacy Policy as and when the need arises, and the same
							will be made available on the Website. But our commitment to protect the privacy of Website users will continue to remain. We suggest
							that you regularly check this Privacy Policy to apprise yourself of any updates. Your continued use of Website or provision of data or
							information thereafter will imply Your unconditional acceptance of such updates to this Privacy Policy.
						</p>

						<p className="w-full tracking-widest break-words">8. GOOGLE ADSENSE</p>

						<p className="w-full tracking-widest break-words">
							Some of the ads may be served by Google. Google&apos;s use of the DART cookie enables it to serve ads to Users based on their visit to
							our Site and other sites on the Internet. DART uses &quot;non personally identifiable information&quot; and does NOT track personal
							information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by
							visiting the Google ad and content network privacy policy at http://www.google.com/privacy_ads.html
						</p>

						<p className="w-full tracking-widest break-words">9. GRIEVANCE OFFICER</p>

						<p className="w-full tracking-widest break-words">
							In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are
							provided below:
						</p>

						<p className="w-full tracking-widest break-words">
							Name: Saurav Gupta
							<br />
							Phone: +91 9971831091
							<br />
							Email: saurav@salesrobot.co
						</p>
					</article>
				</GradientBox>

				<Reveal from="left">
					<GradientBox>
						<Footer />
					</GradientBox>
				</Reveal>
			</main>
		</>
	);
};

export default PrivacyPolicy;
