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

export default function Home() {
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

				<div className="snap-start">
					<Reveal from="left">
						<Hero />
					</Reveal>
				</div>

				<div className="snap-start">
					<Reveal from="right">
						<Features />
					</Reveal>
				</div>

				<div className="snap-start">
					<Reveal from="left">
						<Timeline />
					</Reveal>
				</div>

				<div className="snap-start">
					<Reveal from="right">
						<FAQ />
					</Reveal>
				</div>

				<Reveal from="left">
					<Footer />
				</Reveal>
			</main>
		</>
	);
}
