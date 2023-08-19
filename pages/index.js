// import { FAQ, Footer, Hero, Navbar } from '@/components';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Scarab</title>
			</Head>

			<main className="relative flex flex-col items-center justify-center min-h-screen">
				{/* <Navbar /> */}

				<Hero />

				<FAQ />

				<Footer />
			</main>
		</>
	);
}
