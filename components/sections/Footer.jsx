import Link from 'next/link';

export const Footer = () => {
	return (
		<>
			<footer className="w-full h-20 pt-5 text-center text-lg-start">
				<div className="w-11/12 mx-auto h-0.5 bg-gray-500"></div>

				<div className="flex gap-6 mx-auto my-3 w-80 underline-offset-1">
					<Link className="hover:underline" href={'/'}>
						Home
					</Link>

					<Link className="hover:underline" href={'/privacy-policy'}>
						Privacy Policy
					</Link>

					<Link className="hover:underline" href={'/terms-of-use'}>
						Terms of Use
					</Link>
				</div>

				<div className="flex flex-col items-center justify-center w-full h-full p-1 text-sm text-gray-500">
					<p className="text-center">© 2025 All rights reserved.</p>
					{/* <p className="text-center">
						Made with ❤️ by &nbsp;
						<a href="https://PrashantAmoli.vercel.app" target="_blank">
							Prashant
						</a>
					</p> */}
				</div>
			</footer>
		</>
	);
};
