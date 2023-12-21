import { Link } from 'react-router-dom';

export default function Error404() {
	return (
		<>
			<div className="flex items-center justify-center mt-20">
				<div className="h-[50vh] w-[90vw]">
					<div role="alert" className="alert alert-warning">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-current shrink-0 h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
						<span>
							Sorry, we {"coulnd't"} find the page you were looking for.{' '}
							<Link to="home" className="link link-hover">
								Go Back To Home?
							</Link>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
