import React from 'react';
import TagCloud from '@frank-mayer/react-tag-cloud';
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"

export const WordCloud = ({ data }) => {
	const [start, setStart] = React.useState(false);

	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			setStart(true);
		}
	}, []);

	return (
		<>
			{start ? (
				<TagCloud
					options={w => ({
						radius: Math.min(555, w.innerWidth, w.innerHeight) / 2,
						maxSpeed: 'fast',
					})}
					onClick={(tag, ev) => alert(tag)}
					onClickOptions={{ passive: true }}
					className="z-10 font-semibold text-gray-300 select-none w-max h-max"
				>
					{data}
				</TagCloud>
			) : null}
		</>
	);
};
