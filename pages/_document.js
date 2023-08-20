import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="w-full min-h-screen overflow-x-hidden bg-black/90 scroll-smooth">
			<Head />
			<body className="w-full min-h-screen overflow-x-hidden text-black dark:text-white bg-gradient-to-br from-blue-500 via-blue-100 to-blue-500 scroll-smooth dark:bg-gradient-to-br dark:from-stone-950 dark:via-blue-950/95 dark:to-stone-950 ">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
