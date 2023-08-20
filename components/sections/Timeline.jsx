export const Timeline = () => {
	return (
		<>
			<h2 className="text-6xl font-extrabold text-center">Timeline Heading</h2>

			<div className="container hidden w-full h-full min-h-screen mx-auto md:flex">
				<div className="relative h-full p-10 overflow-hidden wrap">
					<div className="absolute h-full border border-gray-700 border-2-2 border-opacity-20 left-1/2"></div>
					{/* <!-- right timeline --> */}
					<div className="flex items-center justify-between w-full mb-8 right-timeline">
						<div className="order-1 w-5/12"></div>
						<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
							<h1 className="mx-auto text-lg font-semibold ">1</h1>
						</div>
						<div className="order-1 w-5/12 px-6 py-4 border rounded-lg shadow-xl">
							<h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
							<p className="text-sm leading-snug tracking-wide text-opacity-100">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>

					{/* <!-- left timeline --> */}
					<div className="flex flex-row-reverse items-center justify-between w-full mb-8 sm:left-timeline">
						<div className="order-1 w-5/12"></div>
						<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
							<h1 className="mx-auto text-lg font-semibold ">2</h1>
						</div>
						<div className="order-1 w-5/12 px-6 py-4 border rounded-lg shadow-xl">
							<h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
							<p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>

					{/* <!-- right timeline --> */}
					<div className="flex items-center justify-between w-full mb-8 right-timeline">
						<div className="order-1 w-5/12"></div>
						<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
							<h1 className="mx-auto text-lg font-semibold ">3</h1>
						</div>
						<div className="order-1 w-5/12 px-6 py-4 border rounded-lg shadow-xl">
							<h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
							<p className="text-sm leading-snug tracking-wide text-opacity-100">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>

					{/* <!-- left timeline --> */}
					<div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
						<div className="order-1 w-5/12"></div>
						<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
							<h1 className="mx-auto text-lg font-semibold ">4</h1>
						</div>
						<div className="order-1 w-5/12 px-6 py-4 border rounded-lg shadow-xl">
							<h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
							<p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Version */}
			<div className="container w-full h-full min-h-screen px-2 mx-auto md:hidden">
				<div className="relative h-full p-0 overflow-hidden wrap">
					<div className="absolute h-full border border-gray-700 border-2-2 border-opacity-20 left-3"></div>
					{/* <!-- right timeline --> */}
					<div className="flex items-center justify-between w-full mb-8 ">
						{/* <div className="order-1 w-5/12"></div> */}
						<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
							<h1 className="mx-auto text-lg font-semibold ">1</h1>
						</div>
						<div className="order-1 w-11/12 px-6 py-4 border rounded-lg shadow-xl">
							<h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
							<p className="text-sm leading-snug tracking-wide text-opacity-100">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>

					{/* <!-- left timeline --> */}
					<div className="flex items-center justify-between w-full mb-8 sm:left-timeline">
						{/* <div className="order-1 w-5/12"></div> */}
						<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
							<h1 className="mx-auto text-lg font-semibold ">2</h1>
						</div>
						<div className="order-1 w-11/12 px-6 py-4 border rounded-lg shadow-xl">
							<h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
							<p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>

					{/* <!-- right timeline --> */}
					<div className="flex items-center justify-between w-full mb-8 right-timeline">
						{/* <div className="order-1 w-5/12"></div> */}
						<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
							<h1 className="mx-auto text-lg font-semibold ">3</h1>
						</div>
						<div className="order-1 w-11/12 px-6 py-4 border rounded-lg shadow-xl">
							<h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
							<p className="text-sm leading-snug tracking-wide text-opacity-100">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>

					{/* <!-- left timeline --> */}
					<div className="flex items-center justify-between w-full mb-8 left-timeline">
						{/* <div className="order-1 w-5/12"></div> */}
						<div className="z-20 flex items-center order-1 w-8 h-8 border rounded-full shadow-xl ">
							<h1 className="mx-auto text-lg font-semibold ">4</h1>
						</div>
						<div className="order-1 w-11/12 px-6 py-4 border rounded-lg shadow-xl">
							<h3 className="mb-3 text-xl font-bold ">Lorem Ipsum</h3>
							<p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
