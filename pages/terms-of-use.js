import { Footer } from '@/components/sections/Footer';
import Reveal from '@/components/animations/Reveal';
import GradientBox from '@/components/elements/GradientBox';
import Head from 'next/head';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';

export const PrivacyPolicy = () => {
	const scrollRef = useRef(null);
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Head>
				<title>Terms of Use</title>
			</Head>

			<main className="relative flex flex-col items-center justify-center w-full min-h-screen snap-proximity snap snap-y" ref={scrollRef}>
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
						<h1 className="mb-1 text-2xl font-extrabold tracking-widest uppercase sm:text-4xl font-SpaceX">TERMS OF USE</h1>

						<div className="w-full mx-auto h-0.5 mb-5 bg-gray-500"></div>

						<p className="w-full tracking-widest break-words">
							THIS END USER LICENSE AGREEMENT (“TERMS OF USE”) IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC CONTRACT FORMED UNDER THE
							INFORMATION TECHNOLOGY ACT, 2000 AND THE RULES MADE THEREUNDER AND THE AMENDED PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS
							IN VARIOUS STATUTES AS AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000. THESE TERMS OF USE DO NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR
							DIGITAL SIGNATURE.
						</p>

						<p className="w-full tracking-widest break-words">
							THIS DOCUMENT IS PUBLISHED AND SHALL BE CONSTRUED IN ACCORDANCE WITH THE PROVISIONS OF RULE 3 (1) OF THE INFORMATION TECHNOLOGY
							(INTERMEDIARIES GUIDELINES) RULES, 2011 PRESCRIBED UNDER INFORMATION TECHNOLOGY ACT, 2000 THAT REQUIRE PUBLISHING THE RULES AND
							REGULATIONS, PRIVACY POLICY AND USER AGREEMENT FOR ACCESS OR USAGE OF THE WEBSITE.
						</p>

						<p className="w-full tracking-widest break-words">
							THESE TERMS OF USE ARE LEGALLY BINDING BETWEEN SALESROBOT APPLICATION AND USER (BOTH TERMS DEFINED BELOW). THESE TERMS OF USE WILL BE
							EFFECTIVE UPON YOUR ACCEPTANCE OF THE SAME (DIRECTLY OR INDIRECTLY IN ELECTRONIC FORM OR BY MEANS OF AN ELECTRONIC RECORD) AND WILL
							GOVERN THE RELATIONSHIP BETWEEN THE SALESROBOT APPLICATION AND USER FOR THE USE OF THE WEBSITE (DEFINED BELOW).
						</p>

						<p className="w-full tracking-widest break-words">
							PLEASE READ THESE TERMS OF USE CAREFULLY. BY USING THE WEBSITE, YOU INDICATE THAT YOU UNDERSTAND, AGREE AND CONSENT TO THESE TERMS OF
							USE. IF YOU DO NOT AGREE WITH THE TERMS OF THESE TERMS OF USE, PLEASE DO NOT USE THIS WEBSITE. YOU HEREBY PROVIDE YOUR UNCONDITIONAL
							CONSENT OR AGREEMENTS TO SALESROBOT APPLICATION AS PROVIDED UNDER SECTION 43A AND SECTION 72A OF INFORMATION TECHNOLOGY ACT, 2000 AND
							THE INFORMATION TECHNOLOGY (INTERMEDIARY GUIDELINES) RULES, 2011.
						</p>

						<p className="w-full tracking-widest break-words">
							These Terms of Use of the website located at the URL https://salesrobot.co/termsofuse, mobile sites or mobile application (collectively,
							the &quot;Website&quot;) is between Alice Camera Private Limited (&quot;SALESROBOT Application&quot; or &quot;We&quot; or &quot;Us&quot;
							or &quot;Our&quot;), a company incorporated under the Companies Act, 2013 with its registered office situated at H. NO-1262, S/F, Janta
							Flat, GTB Enclave Nand Nagri behind Rajiv Gandhi Hospital East Delhi-110093 and the guest users or registered users of the Website
							(&quot;You&quot; or &quot;Your&quot; or &quot;Yourself&quot; or &quot;User&quot;). These Terms of Use describe the terms on which the
							SALESROBOT Application offers You access to the Website and such other services as are incidental and ancillary thereto
							(&quot;Services&quot;).
						</p>

						<p className="w-full tracking-widest break-words">
							These Terms of Use create a contract between You and SALESROBOT Application. These Terms of Use shall be read together with the Privacy
							Policy or other terms and condition with all other notices, disclaimers, guidelines appearing on the Website from time to time
							(collectively referred to as &quot;Agreement(s)&quot;) constitute the entire agreement upon which You are allowed to access and use the
							Website and avail the Services.
						</p>

						<p className="w-full tracking-widest break-words">1. INTERPRETATION:</p>

						<p className="w-full tracking-widest break-words">
							a. Any reference to the singular includes a reference to the plural and vice versa unless explicitly provided for otherwise; and any
							reference to the masculine includes a reference to the feminine and vice versa.
						</p>

						<p className="w-full tracking-widest break-words">
							b. Headings and captions are used for convenience only and will not affect the interpretation of these Terms of Use.
						</p>

						<p className="w-full tracking-widest break-words">
							c. Any reference to a natural person will, unless repugnant to the context, include his heirs, executors and permitted assignees.
							Similarly, any reference to a juristic person such as SALESROBOT Application will, unless repugnant to the context, include its
							affiliates, successors and permitted assignees.
						</p>

						<p className="w-full tracking-widest break-words">2. ELIGIBILTY:</p>

						<p className="w-full tracking-widest break-words">
							a. Only Users who are 18 years of age or older may use the Services. If You are under 18 years of age and You wish to download, install,
							access or use the Services, your parents or legal guardian must acknowledge and agree to the Terms of Use. Should Your parents or legal
							guardian fail to agree or acknowledge the Terms of Use, You shall immediately discontinue its use.
						</p>

						<p className="w-full tracking-widest break-words">
							b. SALESROBOT Application reserves the right to refuse access to use the Services offered if it is brought to SALESROBOT
							Application&rsquo;s notice or if it is discovered that You are under the age of 18 years.
						</p>

						<p className="w-full tracking-widest break-words">3. ACCOUNT REGISTRATION AND SECURITY</p>

						<p className="w-full tracking-widest break-words">
							a. You may access and use the Website and the Services either as a registered user or as a guest user. However, not all sections of the
							Website and Services will be accessible to guest users.
						</p>

						<p className="w-full tracking-widest break-words">
							b. Registered users: SALESROBOT Application makes certain sections of the Services available to You through the Website only if You have
							provided SALESROBOT Application certain required User information and created an account and a SALESROBOT Application ID through certain
							log-in ID and password (&quot;Account&quot;). In the event You register as a User by creating an Account in order to avail of the
							Services provided by the Website, You will be responsible for maintaining the confidentiality and security of the Account, and are fully
							responsible for all activities that occur under Your Account.
						</p>

						<p className="w-full tracking-widest break-words">
							c. You agree to immediately notify SALESROBOT Application of any unauthorized use of Your Account Information or any other breach of
							security, and ensure that You exit from Your Account at the end of each session. SALESROBOT Application cannot and will not be liable
							for any loss or damage arising from Your failure to comply with this section. You may be held liable for reasonable losses incurred by
							SALESROBOT Application due to unauthorized use of Your Account as a result of Your failure in keeping Your Account Information secure
							and confidential. The foregoing notwithstanding, You shall not be liable at any time for special, punitive, consequential, or incidental
							losses for any reason.
						</p>

						<p className="w-full tracking-widest break-words">
							d. You shall ensure that the Account information provided by You in the Website&#39;s registration form is complete, accurate and
							up-to-date. Use of another user&#39;s Account information for availing the Services is expressly prohibited. If You provide any
							information that is untrue, inaccurate, not current or incomplete (or becomes untrue, inaccurate, not current or incomplete), or
							SALESROBOT Application has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete,
							SALESROBOT Application has the right to suspend or terminate Your Account and refuse any and all current or future use of the Website /
							Services (or any portion thereof). The suspension or deletion of Your account(s) shall not entitle Users to any claims for compensation,
							damages or reimbursement.
						</p>

						<p className="w-full tracking-widest break-words">
							e. Guest users: The Website also allows limited access to the Services for unregistered Users (also called as &apos;guest users&apos;).
							Such users will be able to browse the Website.
						</p>

						<p className="w-full tracking-widest break-words">4. SERVICES</p>

						<p className="w-full tracking-widest break-words">
							a. SALESROBOT Application is an online platform inter-alia engaged in the business of providing powerful LinkedIn automation tool and
							writes highly-personalized connection requests.
						</p>

						<p className="w-full tracking-widest break-words">
							b. SALESROBOT Application shall own, sell, resell, furnish, provide, prepare any product or manage and/or control the Users.
						</p>

						<p className="w-full tracking-widest break-words">5. USE OF THE WEBSITE / SERVICES</p>

						<p className="w-full tracking-widest break-words">You agree and undertake that when using a Website / Service, You will not:</p>

						<p className="w-full tracking-widest break-words">
							a. Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others;
						</p>

						<p className="w-full tracking-widest break-words">
							b. Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful
							topic, name, material or information;
						</p>

						<p className="w-full tracking-widest break-words">c. Conduct or forward surveys, contests, pyramid schemes or chain letters;</p>

						<p className="w-full tracking-widest break-words">
							d. Falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or
							source of software or other material contained in a file that is uploaded;
						</p>

						<p className="w-full tracking-widest break-words">e. Any information provided by You on this site shall not be misleading in any way;</p>

						<p className="w-full tracking-widest break-words">
							f. Use any deep-link, robot, spider or other automatic device, program, algorithm or methodology, or any similar or equivalent manual
							process, to access, acquire, copy or monitor any portion of the Website or content, or in any way reproduce or circumvent the
							navigational structure or presentation of the Website, to obtain or attempt to obtain any materials, documents or information through
							any means not specifically made available through the Website;
						</p>

						<p className="w-full tracking-widest break-words">
							g. Reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from,
							transfer, or sell any information or software obtained from the Website.
						</p>

						<p className="w-full tracking-widest break-words">
							h. Single or additional conditions of use or access may apply in specific scenarios and in such cases are additionally indicated within
							this document.
						</p>

						<p className="w-full tracking-widest break-words">6. THIRD PARTY CONTENTS</p>

						<p className="w-full tracking-widest break-words">
							a. You acknowledge that when You access a link that leaves the Services, the site You will enter into is not controlled by Us and
							different terms of use and privacy policies may apply. By accessing links to other sites, You acknowledge that We are not responsible
							for those sites. We reserve the right to disable links to and / or from third-party sites to the Services, although we are under no
							obligation to do so.
						</p>

						<p className="w-full tracking-widest break-words">7. PROMOTIONS, DISCOUNTS AND COUPONS</p>

						<p className="w-full tracking-widest break-words">
							SALESROBOT Application reserves the right to offer the discounts/promotional offers to any Users of its own choice and shall not be held
							liable to any User for not offering the same. The discounts/offers have been made available at the sole discretion of the SALESROBOT
							Application and are subject to change / amendment / modification from time to time. SALESROBOT Application at its sole discretion may at
							any time discontinue the discounts/ offers without assigning any reasons or without any prior intimation whatsoever. Participation in
							discounts/offers is entirely voluntary and it is understood, that the participation by the User shall be deemed to have been made on a
							voluntary basis.
						</p>

						<p className="w-full tracking-widest break-words">8. COMMUNICATIONS</p>

						<p className="w-full tracking-widest break-words">
							When You use the Website or send emails or other data, information or communication to Us, You agree and understand that You are
							communicating with Us through electronic records and You consent to receive communications via electronic records from Us periodically
							and as and when required. We may communicate with You by email or by such other mode of communication, electronic or otherwise.
						</p>

						<p className="w-full tracking-widest break-words">9. RIGHT TO USE LOGOS</p>

						<p className="w-full tracking-widest break-words">
							Nothing contained in these Terms of Use constitutes a license in favor of the User to use trademarks, service marks or logos and/or any
							other marks, owned by SALESROBOT Application that may be reflected on the Website (&quot;IPR&quot;). Any use by User of IPR will be only
							with the prior written permission from Us. You acknowledge that We are the sole and exclusive owner of Our respective IPR’s and agree
							that You will not contest the ownership of the said IPR’s for any reason whatsoever.
						</p>

						<p className="w-full tracking-widest break-words">10. NO WARRANTIES</p>
						<p className="w-full tracking-widest break-words">
							The Website and the Services are provided on an &quot;as is&quot; basis. We do not make any other representations or warranties of any
							kind, express or implied, including without limitation that the Website or the Services will meet Your requirements, will always be
							available, accessible, uninterrupted, timely, secure, or operate without error.
						</p>

						<p className="w-full tracking-widest break-words">11. INDEMNITY</p>
						<p className="w-full tracking-widest break-words">
							You shall indemnify and hold harmless SALESROBOT Application, its owner, licensee, affiliates (as applicable) and their respective
							officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorneys&apos; fees, made by any
							third party or penalty imposed due to or arising out of Your breach of these Terms of Use, Privacy Policy, or Your violation of any law,
							rules or regulations or the rights (including infringement of intellectual property rights) of a third party.
						</p>
						<p className="w-full tracking-widest break-words">
							We shall indemnify and hold harmless You, your owners, licensees, affiliates (as applicable) and your and their respective officers,
							directors, agents, and employees, from any claim or demand, or actions including reasonable attorneys&apos; fees, made by any third
							party or penalty imposed due to or arising out of Your breach of these Terms of Use, Privacy Policy, or Your violation of any law, rules
							or regulations or the rights (including infringement of intellectual property rights) of a third party.
						</p>

						<p className="w-full tracking-widest break-words">12. LIMITATION OF LIABILITY</p>
						<p className="w-full tracking-widest break-words">
							IN NO EVENT SHALL SALESROBOT APPLICATION BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND IN
							CONNECTION WITH THESE TERMS OF USE, EVEN IF USER HAS BEEN INFORMED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES.
						</p>

						<p className="w-full tracking-widest break-words">13. UPDATES</p>
						<p className="w-full tracking-widest break-words">
							We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time with thirty
							(30) days prior written notice to You. We also suggest that You regularly check these Terms of Use to apprise Yourself of any updates.
						</p>
						<p className="w-full tracking-widest break-words">
							Your continued use of the Website following the posting of changes will mean that You accept and agree to the revisions. As long as You
							comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the
							Website.
						</p>

						<p className="w-full tracking-widest break-words">14. SEVERABILITY</p>
						<p className="w-full tracking-widest break-words">
							If any of these terms should be determined to be illegal, invalid or otherwise unenforceable by reason of the laws of any state in which
							these terms are intended to be effective, then to the extent and within the jurisdiction which that term is illegal, invalid or
							unenforceable, it shall be severed and deleted and the remaining Terms of Use shall survive, remain in full force and effect and
							continue to be binding and enforceable.
						</p>

						<p className="w-full tracking-widest break-words">15. NON-ASSIGNMENT</p>
						<p className="w-full tracking-widest break-words">
							You shall not assign or transfer or purport to assign or transfer the contract between You and Us to any other person.
						</p>

						<p className="w-full tracking-widest break-words">16. GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION</p>
						<p className="w-full tracking-widest break-words">
							These Terms of Use are governed by the laws of India. Any action, suit, or other legal proceeding, which is commenced to resolve any
							matter arising under or relating to this website, shall be subject to the jurisdiction of the courts at New Delhi, India.
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
