const Hero = () => {
	// FIXME: HANDLE FORM SUBMITTON AND VALIDATION
	return (
		<div className='py-28'>
			<div className='main-container grid grid-cols-1 items-center lg:grid-cols-2 gap-10 lg:gap-20'>
				<div className='relative pb-video overflow-hidden lg:pb-square lg:order-last'>
					<img className='absolute w-full h-full object-cover' src='./assets/hero.jpg' alt='team working in creative office' />
				</div>
				<div>
					<h1 className='text-6xl font-bold'>For all the ways you work, we’re here.</h1>
					<p className='text-lg my-6'>Whether you need an alternative to working from home or a hybrid solution for the team, we’re here to help. Complete this form and our team will reach out to learn more about your unique workplace needs.</p>
					<form id='lead'>
						<div className='flex flex-col sm:flex-row gap-4 mb-4'>
							<input className='input-field' type='text' placeholder='Full name*' />
							<input className='input-field' type='email' placeholder='Email address*' />
						</div>
						<div className='flex flex-col sm:flex-row  gap-4 mb-4'>
							<input className='input-field' type='tel' placeholder='Full name*' />
							<input className='input-field' type='text' placeholder='Country*' />
						</div>
						<div className='flex flex-col sm:flex-row  gap-4 mb-4'>
							<input className='input-field' type='text' placeholder='Company name' />
							<input className='input-field' type='number' placeholder='Team size' />
							<input className='border-blue-700 bg-blue-700 text-white px-6 py-3' type='submit' value='Submit' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Hero;
