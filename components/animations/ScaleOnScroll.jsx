import * as React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export const ScaleOnScroll = ({ children }) => {
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [1, 10], [0, 0]);

	return (
		<div className="wrapper">
			<motion.div
				className="container"
				style={{
					scale,
				}}
			>
				<motion.div
					className="item"
					style={{
						scaleY: scrollYProgress,
					}}
				>
					{children}
				</motion.div>
			</motion.div>
		</div>
	);
};
