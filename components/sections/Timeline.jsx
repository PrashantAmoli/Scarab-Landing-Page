import ReactParallaxTilt from 'react-parallax-tilt';
import Reveal from '../animations/Reveal';
import { TIMELINE_DATA } from '@/utils/constants';

export const Timeline = () => {
	return (
		<>
			<h2 className="mb-6 text-6xl font-extrabold text-center">Timeline Heading</h2>

			<div className="container hidden w-full h-full min-h-screen mx-auto md:flex">
				<div className="relative h-full p-10 overflow-hidden wrap">
					<div className="absolute h-full border border-gray-700 border-2-2 border-opacity-20 left-1/2"></div>

					{TIMELINE_DATA.map((data, key) => {
						if (key % 2 === 0) {
							return (
								<>
									<ReactParallaxTilt key={key} tiltAxis={'x'}>
										<Reveal from="left">
											{/* <!-- right timeline --> */}
											<div className="flex items-center justify-between w-full mb-9 right-timeline">
												<div className="order-1 w-5/12"></div>
												<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
													<h1 className="mx-auto text-lg font-semibold ">{key + 1}</h1>
												</div>
												<div className="order-1 w-5/12 px-6 border rounded-lg shadow-xl gradient_secondary py-9">
													<h3 className="mb-3 text-xl font-bold ">{data.title}</h3>
													<p className="text-sm leading-snug tracking-wide text-opacity-100">{data.description}</p>
												</div>
											</div>
										</Reveal>
									</ReactParallaxTilt>
								</>
							);
						} else {
							return (
								<>
									<ReactParallaxTilt key={key} tiltAxis={'x'}>
										<Reveal from="right">
											{/* <!-- left timeline --> */}
											<div className="flex flex-row-reverse items-center justify-between w-full mb-9 left-timeline">
												<div className="order-1 w-5/12"></div>
												<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
													<h1 className="mx-auto text-lg font-semibold backdrop-blur-xl">{key + 1}</h1>
												</div>
												<div className="order-1 w-5/12 px-6 border rounded-lg shadow-xl gradient_secondary py-9">
													<h3 className="mb-3 text-xl font-bold ">{data.title}</h3>
													<p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">{data.description}</p>
												</div>
											</div>
										</Reveal>
									</ReactParallaxTilt>
								</>
							);
						}
					})}
				</div>
			</div>

			{/* Mobile Version */}
			<div className="container w-full h-full min-h-screen px-2 mx-auto md:hidden">
				<div className="relative h-full p-0 overflow-hidden wrap">
					<div className="absolute h-full border border-gray-700 border-2-2 border-opacity-20 left-3"></div>

					{TIMELINE_DATA.map((data, key) => {
						return (
							<>
								<ReactParallaxTilt key={key} tiltAxis={'x'}>
									<Reveal from="right">
										<div className="flex items-center justify-between w-full mb-9 right-timeline">
											{/* <div className="order-1 w-5/12"></div> */}
											<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
												<h1 className="mx-auto text-lg font-semibold ">{key + 1}</h1>
											</div>
											<div className="order-1 w-11/12 px-6 border rounded-lg shadow-xl gradient_secondary py-9">
												<h3 className="mb-3 text-xl font-bold ">{data.title}</h3>
												<p className="text-sm leading-snug tracking-wide text-opacity-100">{data.description}</p>
											</div>
										</div>
									</Reveal>
								</ReactParallaxTilt>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};
