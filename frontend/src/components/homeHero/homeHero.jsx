import { motion } from 'framer-motion';
import homePets from '../../assets/Home.png';
import Card from '../card1/card1';

const heroVariant = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay: 1, duration: 1, ease: 'easeInOut', when: 'beforeChildren' },
	},
};

const childCardVariant1 = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.1, duration: 0.5, ease: 'easeOut' },
	},
};
const childCardVariant2 = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.4, duration: 0.5, ease: 'easeOut' },
	},
};
const childCardVariant3 = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.7, duration: 0.5, ease: 'easeOut' },
	},
};

const catsvg = (
	<>
		<svg
			width="100px"
			height="100px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#ffffff"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<path
					d="M3 3L21 21M9.98271 4.38434C10.7008 4.08819 11.3504 3.64959 12 3C13.7136 4.71361 15.4272 4.95899 18.3988 4.99413C18.9663 5.00084 19.25 5.00419 19.4613 5.11409C19.6487 5.21152 19.7974 5.36198 19.8926 5.55048C20 5.7631 20 6.04207 20 6.6V12C20 12.722 19.8842 13.415 19.6804 14.0756M17.6219 17.6257C15.9353 19.587 13.7857 20.9803 12.698 21.6149C12.4766 21.744 12.3659 21.8086 12.2097 21.8421C12.0884 21.8681 11.9116 21.8681 11.7903 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V6.6C4 6.04206 4 5.76309 4.10739 5.55047C4.2026 5.36197 4.3513 5.2115 4.53866 5.11407C4.65727 5.0524 4.7986 5.02428 5 5.0103"
					stroke="#ffffff"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>{' '}
			</g>
		</svg>
	</>
);

const rabbitsvg = (
	<>
		<svg
			fill="#ffffff"
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			width="100px"
			height="100px"
			viewBox="0 0 59.50 59.50"
			stroke="#ffffff"
			stroke-width="0.00059504"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<g>
					{' '}
					<g>
						{' '}
						<g>
							{' '}
							<path d="M29.752,56.701c-3.608,0-6.652-2.463-7.538-5.797H9.033C4.053,50.904,0,46.852,0,41.871c0-3.575,2.117-6.819,5.394-8.264 C6.988,32.764,14,27.448,14,24.215v-8.072c0-7.355,5.983-13.34,13.339-13.34h4.826c7.354,0,13.339,5.984,13.339,13.34v8.072 c0,3.232,7.013,8.549,8.667,9.42c3.216,1.416,5.333,4.66,5.333,8.236c0,4.979-4.053,9.033-9.033,9.033H37.29 C36.404,54.238,33.359,56.701,29.752,56.701z M27.339,6.803c-5.149,0-9.339,4.189-9.339,9.34v8.072 c0,6.559-10.883,13.004-10.993,13.053C5.181,38.072,4,39.879,4,41.871c0,2.775,2.258,5.033,5.033,5.033h14.921 c1.104,0,2,0.896,2,2c0,2.094,1.704,3.797,3.798,3.797c2.094,0,3.798-1.703,3.798-3.797c0-1.104,0.896-2,2-2h14.921 c2.775,0,5.033-2.258,5.033-5.033c0-1.991-1.182-3.799-3.007-4.604c-0.111-0.048-10.993-6.494-10.993-13.052v-8.072 c0-5.15-4.189-9.34-9.339-9.34L27.339,6.803L27.339,6.803z"></path>{' '}
						</g>{' '}
						<g>
							{' '}
							<path d="M38.015,18.983c-1.104,0-2-0.896-2-2c0-2.619-2.131-4.75-4.75-4.75c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2 c4.825,0,8.75,3.924,8.75,8.75C40.015,18.087,39.119,18.983,38.015,18.983z"></path>{' '}
						</g>{' '}
					</g>{' '}
				</g>{' '}
			</g>
		</svg>
	</>
);

const otherssvg = (
	<>
		<svg
			fill="#ffffff"
			width="100px"
			height="100px"
			viewBox="0 0 36 36"
			version="1.1"
			preserveAspectRatio="xMidYMid meet"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<title>storage-line</title>{' '}
				<path
					class="clr-i-outline clr-i-outline-path-1"
					d="M33,6.69h0c-.18-3.41-9.47-4.33-15-4.33S3,3.29,3,6.78V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V6.78s0,0,0,0S33,6.7,33,6.69Zm-2,7.56c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.32,43.32,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.32,43.32,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c7.77,0,12.46,1.53,13,2.37-.52.87-5.21,2.39-13,2.39A37.6,37.6,0,0,1,7,7.76V9.85a43.53,43.53,0,0,0,11,1.27c4,0,9.93-.48,13-2Z"
				></path>{' '}
				<rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect>{' '}
			</g>
		</svg>
	</>
);

function HomeHero() {
	return (
		<>
			<motion.div
				className="hero"
				style={{
					backgroundImage: `url(${homePets})`,
					minHeight: '60vh',
				}}
				variants={heroVariant}
				initial="hidden"
				animate="visible"
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="">
						<h1 className="mb-5 text-5xl font-bold">
							Never forget again – join Reminder Hub now!
						</h1>
						<p className="mb-5">
							Stay on top of your tasks, memories, and important dates with Reminder Hub.
							Sign up now and take control of your reminders!
						</p>

						<div className="flex flex-wrap gap-6 justify-center">
							<motion.div variants={childCardVariant1}>
								<Card first={catsvg} second={'SECURITY'} />
							</motion.div>
							<motion.div variants={childCardVariant2}>
								<Card first={rabbitsvg} second={'REMINDERS'} />
							</motion.div>
							<motion.div variants={childCardVariant3}>
								<Card first={otherssvg} second={'STORAGE'} />
							</motion.div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default HomeHero;
