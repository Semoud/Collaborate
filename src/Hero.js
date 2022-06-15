const Hero = () => {
	// FIXME: HANDLE FORM SUBMITTON AND VALIDATION
	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20'>
				<div className='relative overflow-hidden pb-video lg:order-last lg:pb-square'>
					<img className='absolute h-full w-full object-cover' src='./assets/hero.jpg' alt='team working in creative office' />
				</div>
				<div>
					<h1 className='text-3xl font-semibold md:text-6xl'>For all the ways you work, we’re here.</h1>
					<p className='my-6 md:text-lg'>Whether you need an alternative to working from home or a hybrid solution for the team, we’re here to help. Complete this form and our team will reach out to learn more about your unique workplace needs.</p>
					<form id='lead'>
						<div className='mb-4 flex flex-col gap-4 sm:flex-row'>
							<input className='input-field' type='text' placeholder='Full name*' />
							<input className='input-field' type='email' placeholder='Email address*' />
						</div>
						<div className='mb-4 flex flex-col  gap-4 sm:flex-row'>
							<input className='input-field' type='tel' placeholder='Full name*' />
							<input className='input-field' type='text' placeholder='Country*' />
						</div>
						<div className='mb-4 flex flex-col  gap-4 sm:flex-row'>
							<input className='input-field' type='text' placeholder='Company name' />
							<input className='input-field' type='number' placeholder='Team size' />
							<input className='border-blue-700 bg-blue-700 px-6 py-3 text-white' type='submit' value='Submit' />
						</div>
						<p className='text-xs'>
							By clicking Sign Up you're confirming that you agree with our{' '}
							<a className='underline' href='http://www.semoud.com'>
								Terms and Conditions
							</a>
							.
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Hero;
