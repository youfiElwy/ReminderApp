import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const svgVariants = {
	hidden: { rotate: -360 },
	visible: { rotate: 0, transition: { duration: 1 } },
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: { duration: 2, ease: 'easeInOut' },
	},
};

const navigationVariants = {
	hidden: {
		y: -250,
	},
	visible: {
		y: 0,
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 120,
		},
	},
};

const navigation = [
	{ name: '+ Add', href: '/add-reminder', current: true },
	{ name: 'Frequent', href: 'reminders-frequent', current: false },
	{ name: 'Sensitive', href: 'reminders-sensitive', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar({ showNavNFooter, setShowNavNFooter }) {
	// Use Local Storage to get the initial state
	const initialShowNavNFooter = localStorage.getItem('showNavNFooter') === 'true';
	const [isInitialRender, setIsInitialRender] = useState(true);

	const handleLogout = async () => {
		try {
			const response = await fetch('http://localhost:3001/logout', {
				method: 'GET',
				credentials: 'include',
			});

			if (response.status === 200) {
				navigate('/');
			} else {
				// Handle other status codes or errors
				console.error('Logout failed:', response.statusText);
			}
		} catch (error) {
			console.error('Error during logout:', error.message);
		}
	};

	useEffect(() => {
		if (isInitialRender) {
			// Set the state only on the initial render
			setShowNavNFooter(initialShowNavNFooter);
			setIsInitialRender(false);
		}
	}, [isInitialRender, initialShowNavNFooter, setShowNavNFooter]);

	const navigate = useNavigate();

	return (
		<motion.div
			variants={navigationVariants}
			initial="hidden"
			animate={showNavNFooter ? 'visible' : 'hidden'}
		>
			<Disclosure as="nav" className="bg-base-200 sticky">
				{({ open }) => (
					<>
						<div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between sm:justify-start">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
									<motion.div
										drag
										dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
										dragElastic={1}
										className="flex flex-shrink-0 items-center"
										onClick={() => navigate('/home')}
									>
										<motion.svg
											variants={svgVariants}
											initial="hidden"
											animate="visible"
											width="40px"
											height="40px"
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
												<motion.path
													variants={pathVariants}
													d="M13 17H21M17 21V13M10 11H4M20 9V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H10M15 3V7M9 3V7"
													stroke="#ffffff"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												></motion.path>{' '}
											</g>
										</motion.svg>
									</motion.div>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<Link
													key={item.name}
													to={item.href}
													className={classNames(
														item.current
															? 'bg-neutral-focus text-white hover:bg-neutral hover:text-white transition-color duration-300'
															: 'text-secondary-content hover:bg-neutral hover:text-white transition-color duration-300',
														'rounded-md px-3 py-2 text-sm font-medium'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="relative flex rounded-full bg-neutral text-sm focus:outline-none focus:ring-2 focus:ring-neutral focus:ring-offset-2 focus:ring-offset-base-100">
												<span className="absolute -inset-1.5" />
												<span className="sr-only">Open user menu</span>
												<svg
													width="40px"
													height="40px"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
													<g
														id="SVGRepo_tracerCarrier"
														stroke-linecap="round"
														stroke-linejoin="round"
													></g>
													<g id="SVGRepo_iconCarrier">
														<path
															d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z"
															className="fill-base-100"
														></path>
														<path
															d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z"
															className="fill-base-100"
														></path>
													</g>
												</svg>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-base-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<Link
															to="/"
															className={classNames(
																active ? 'bg-base-100' : '',
																'block px-4 py-2 text-sm text-white'
															)}
															onClick={handleLogout}
														>
															Log Out
														</Link>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2">
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className={classNames(
											item.current
												? 'bg-neutral-focus text-white hover:bg-neutral-focus hover:text-white transition-color duration-300'
												: 'text-secondary-content hover:bg-neutral-focus hover:text-white transition-color duration-300',
											'block rounded-md px-3 py-2 text-base font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Link>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</motion.div>
	);
}
