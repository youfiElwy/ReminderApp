import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const svgVariants = {
	hidden: {
		opacity: 0,
		y: '-7vw',
	},
	visible: {
		opacity: 1,
		y: '0vw',
		transition: {
			duration: 2,
			ease: 'easeOut',
		},
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			delay: 1,
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
};

const textVariants = {
	hidden: {
		opacity: 0,
		y: 75,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.25,
		},
	},
};

function HomeSection2() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const inViewControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			inViewControls.start('visible');
		}
	});

	return (
		<>
			<div className="container my-24 mx-auto md:px-6">
				<section className="mb-32 text-center">
					<h2 className="mb-16 text-3xl font-bold text-neutral">
						Introducing Our <u className="text-primary dark:text-accent-focus">Features</u>
					</h2>
					<div ref={ref} className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
						<div className="mb-12 md:mb-0">
							<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
								<motion.svg
									variants={svgVariants}
									initial="hidden"
									animate={inViewControls}
									width="150px"
									height="150px"
									viewBox="0 0 24.00 24.00"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke="#ffffff"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{' '}
										<motion.path
											variants={pathVariants}
											d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
											stroke="#ffffff"
											stroke-width="1.9200000000000004"
											stroke-linecap="round"
											stroke-linejoin="round"
										></motion.path>{' '}
										<motion.path
											variants={pathVariants}
											d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
											stroke="#ffffff"
											stroke-width="1.9200000000000004"
											stroke-linecap="round"
											stroke-linejoin="round"
										></motion.path>{' '}
									</g>
								</motion.svg>
							</div>
							<motion.h5
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="mb-4 text-lg font-bold text-neutral-content"
							>
								Create Your User Profile
							</motion.h5>
							<motion.p
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="text-neutral-400 dark:text-neutral-content"
							>
								Create a personalized profile with your own unique username and password,
								allowing you to manage your reminders efficiently. Your profile ensures that
								your reminders are private and easily accessible, making organization a
								breeze
							</motion.p>
						</div>

						<div className="mb-12 md:mb-0">
							<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
								<motion.svg
									variants={svgVariants}
									initial="hidden"
									animate={inViewControls}
									fill="#ffffff"
									width="150px"
									height="150px"
									viewBox="0 0 36 36"
									version="1.1"
									preserveAspectRatio="xMidYMid meet"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{' '}
										<title>storage-line</title>{' '}
										<motion.path
											variants={pathVariants}
											class="clr-i-outline clr-i-outline-path-1"
											d="M33,6.69h0c-.18-3.41-9.47-4.33-15-4.33S3,3.29,3,6.78V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V6.78s0,0,0,0S33,6.7,33,6.69Zm-2,7.56c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.32,43.32,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.32,43.32,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c7.77,0,12.46,1.53,13,2.37-.52.87-5.21,2.39-13,2.39A37.6,37.6,0,0,1,7,7.76V9.85a43.53,43.53,0,0,0,11,1.27c4,0,9.93-.48,13-2Z"
										></motion.path>{' '}
										<rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect>{' '}
									</g>
								</motion.svg>
							</div>
							<motion.h5
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="mb-4 text-lg font-bold text-neutral-content"
							>
								Unlimited Storage
							</motion.h5>
							<motion.p
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="text-neutral-400 dark:text-accent-content"
							>
								Enjoy the freedom of unlimited storage for your reminders. Never worry about
								running out of space or losing important information. Store as many
								reminders, images, and dates as you need, ensuring you have everything in
								one place
							</motion.p>
						</div>

						<div className="mb-12 md:mb-0">
							<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
								<motion.svg
									variants={svgVariants}
									initial="hidden"
									animate={inViewControls}
									width="150px"
									height="150px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke="#ffffff"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{' '}
										<motion.path
											variants={pathVariants}
											d="M3 3L21 21M9.98271 4.38434C10.7008 4.08819 11.3504 3.64959 12 3C13.7136 4.71361 15.4272 4.95899 18.3988 4.99413C18.9663 5.00084 19.25 5.00419 19.4613 5.11409C19.6487 5.21152 19.7974 5.36198 19.8926 5.55048C20 5.7631 20 6.04207 20 6.6V12C20 12.722 19.8842 13.415 19.6804 14.0756M17.6219 17.6257C15.9353 19.587 13.7857 20.9803 12.698 21.6149C12.4766 21.744 12.3659 21.8086 12.2097 21.8421C12.0884 21.8681 11.9116 21.8681 11.7903 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V6.6C4 6.04206 4 5.76309 4.10739 5.55047C4.2026 5.36197 4.3513 5.2115 4.53866 5.11407C4.65727 5.0524 4.7986 5.02428 5 5.0103"
											stroke="#ffffff"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										></motion.path>{' '}
									</g>
								</motion.svg>
							</div>
							<motion.h5
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="mb-4 text-lg font-bold text-neutral-content"
							>
								Robust Security
							</motion.h5>
							<motion.p
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="text-neutral-400 dark:text-accent-content"
							>
								We take your privacy seriously. With advanced security measures, including
								session timeouts and encryption, your sensitive data and personal
								information are safe and sound. Rest easy knowing your reminders are for
								your eyes only
							</motion.p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default HomeSection2;
