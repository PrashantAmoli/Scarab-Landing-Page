import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="w-full min-h-screen overflow-x-hidden bg-black/90 scroll-smooth">
			<Head />
			<body className="w-full min-h-screen overflow-x-hidden text-white bg-stone-950/95 scroll-smooth">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
