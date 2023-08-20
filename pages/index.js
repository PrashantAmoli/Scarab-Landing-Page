// import { FAQ, Footer, Hero, Navbar } from '@/components';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import Head from 'next/head';
import { Features } from '@/components/sections/Features';
import { Timeline } from '@/components/sections/Timeline';
import Reveal from '@/components/animations/Reveal';
import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import { SocialsMenu } from '@/components/sections/SocialsMenu';
import GradientBox from '@/components/elements/GradientBox';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export default function Home() {
	const { theme, setTheme } = useTheme();
	const scrollRef = useRef(null);
	// const { goto } = useScrollSnap({
	// 	ref: scrollRef,
	// 	duration: 200,
	// });

	return (
		<>
			<Head>
				<title>Scarab</title>
			</Head>

			<main className="relative flex flex-col items-center justify-center min-h-screen snap-proximity snap snap-y" ref={scrollRef}>
				{/* <Navbar /> */}

				<Reveal from="left">
					<GradientBox>
						<Hero />
					</GradientBox>
				</Reveal>

				<SocialsMenu />
				<Reveal from="right"></Reveal>

				<Reveal from="right">
					<GradientBox>
						<Features />
					</GradientBox>
				</Reveal>

				<Reveal from="left">
					<GradientBox>
						<Timeline />
					</GradientBox>
				</Reveal>

				<Reveal from="right">
					<GradientBox>
						<FAQ />
					</GradientBox>
				</Reveal>

				<Reveal from="left">
					<GradientBox>
						<Footer />
					</GradientBox>
				</Reveal>

				<Switch
					checked={theme === 'light' ? true : false}
					onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					className="fixed z-30 scale-110 sm:scale-125 top-14 sm:top-5 right-2 sm:right-4 dark:bg-white"
				/>
			</main>
		</>
	);
}
