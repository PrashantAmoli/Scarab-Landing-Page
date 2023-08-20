import Link from 'next/link';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { PiTelegramLogoBold, PiFacebookLogoBold, PiDiscordLogo } from 'react-icons/pi';
import { MdAlternateEmail } from 'react-icons/md';

const socials = [
	{
		name: 'Twitter',
		url: 'https://twitter.com/vercel',
		trigger: <FiTwitter />,
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/company/vercel',
		trigger: <FiLinkedin />,
	},
	{
		name: 'Email',
		url: 'mailto:test@gmail.com',
		trigger: <MdAlternateEmail />,
	},
	{
		name: 'Telegram',
		url: 'https://t.me/vercel',
		trigger: <PiTelegramLogoBold />,
	},
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/vercel',
		trigger: <PiFacebookLogoBold />,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/vercel',
		trigger: <FiInstagram />,
	},
	{
		name: 'Discord',
		url: 'https://discord.com/invite/vercel',
		trigger: <PiDiscordLogo />,
	},
];

export const SocialsMenu = () => {
	return (
		<>
			<section className="fixed z-30 flex flex-col gap-5 right-1.5 sm:right-5 socials top-1/4">
				{socials.map((social, key) => (
					<HoverCard key={key}>
						{/* <Link href={social.url}> */}
						<HoverCardTrigger className="flex items-center justify-center w-8 h-8 text-2xl rounded-full cursor-pointer backdrop-blur-xl gradient_secondary">
							{social.trigger}
						</HoverCardTrigger>

						<HoverCardContent className="relative py-1 text-center rounded-full w-28 right-9 sm:right-14 bottom-9 bg-black/10 backdrop-blur">
							<Link href={social.url}>{social.name}</Link>
						</HoverCardContent>
						{/* </Link> */}
					</HoverCard>
				))}
			</section>
		</>
	);
};
