import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="w-full min-h-screen overflow-x-hidden bg-black/90 scroll-smooth">
			<Head />
			<body className="w-full min-h-screen overflow-x-hidden text-white bg-gradient-to-br from-stone-950 via-blue-950/95 to-stone-950 scroll-smooth">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
