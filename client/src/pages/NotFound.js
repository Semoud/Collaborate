import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20'>
				<div className='relative overflow-hidden pb-video lg:order-last lg:pb-square'>
					<img className='absolute h-full w-full object-cover' src='./../assets/hero.jpg' alt='team working in creative office' />
				</div>
				<div>
					<h1 className='text-3xl font-semibold md:text-6xl'>404.</h1>
					<p className='my-6 md:text-lg'>Looks like the page you was looking for has gone missing!</p>
					<Link to='/' className='mt-6 block'>
						Go back home {' >'}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
