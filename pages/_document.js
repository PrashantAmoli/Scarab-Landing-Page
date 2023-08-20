import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="w-full min-h-screen overflow-x-hidden bg-black/90 scroll-smooth">
			<Head />
			<body className="w-full min-h-screen overflow-x-hidden text-black dark:text-white scroll-smooth gradient_main">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
