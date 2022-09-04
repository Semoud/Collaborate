const Footer = () => {
	return (
		<div className='border-t border-gray-200 py-10 md:py-20 lg:border-0'>
			<div className='main-container'>
				<div className='flex flex-col items-center justify-between gap-8 pb-10 lg:flex-row lg:gap-0 lg:pb-20'>
					<a href='https://www.semoud.com/portfolio'>
						<img className='max-w-[125px]' src='/assets/logo.svg' alt='WeWork logo' />
					</a>
					<div className='flex flex-col gap-8 text-center md:flex-row md:gap-0'>
						<a className='px-4 font-medium' href='https://www.semoud.com/portfolio'>
							Locations
						</a>
						<a className='px-4 font-medium' href='https://www.semoud.com/portfolio'>
							Solutions
						</a>
						<a className='px-4 font-medium' href='https://www.semoud.com/portfolio'>
							Enterprise
						</a>
						<a className='px-4 font-medium' href='https://www.semoud.com/portfolio'>
							Ideas
						</a>
					</div>
					<div className='flex'>
						<a href='https://www.semoud.com/portfolio'>
							<img className='mx-1 max-w-[20px]' src='/assets/social_facebook.png' alt='facebook' />
						</a>
						<a href='https://www.semoud.com/portfolio'>
							<img className='mx-1 max-w-[20px]' src='/assets/social_instagram.png' alt='instagram' />
						</a>
						<a href='https://www.semoud.com/portfolio'>
							<img className='mx-1 max-w-[20px]' src='/assets/social_twitter.png' alt='twitter' />
						</a>
						<a href='https://www.semoud.com/portfolio'>
							<img className='mx-1 max-w-[20px]' src='/assets/social_linkedin.png' alt='linkedin' />
						</a>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center gap-6 border-t pt-8 text-xs md:flex-row md:gap-0'>
					<a className='px-4 font-medium' href='https://www.semoud.com/portfolio'>
						{new Date().getFullYear()} Semoud B. All right reserved.
					</a>
					<a className='px-4 font-medium underline' href='https://www.semoud.com/portfolio'>
						Privacy Policy
					</a>
					<a className='px-4 font-medium underline' href='https://www.semoud.com/portfolio'>
						Terms of Service
					</a>
					<a className='px-4 font-medium underline' href='https://www.semoud.com/portfolio'>
						Cookies Settings
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
