import { useState } from 'react';
import FormError from './FormError';
import FormSuccess from './FormSuccess';

const Hero = () => {
	const [formSuccess, setFormSuccess] = useState(null);
	const [formError, setFormError] = useState(null);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [telephone, setTelephone] = useState('');
	const [country, setCountry] = useState('');
	const [company, setCompany] = useState('');
	const [teamSize, setTeamSize] = useState('');

	const submitForm = event => {
		event.preventDefault();
		const url = '/api/submission';
		const form = { name, email, telephone, country, company, teamSize };
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form),
		};
		fetch(url, options)
			.then(data => data.json())
			.then(res => {
				setFormError(null);
				setFormSuccess(res.message);
			})
			.catch(err => setFormError(err.message));
	};

	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20'>
				<div className='aspect-w-16 aspect-h-9 lg:aspect-w-1 lg:aspect-h-1 lg:order-last'>
					<img className='h-full w-full object-cover object-center' src='./assets/hero.jpg' alt='team working in creative office' />
				</div>
				<div>
					<h1 className='text-3xl font-semibold md:text-6xl'>For all the ways you work, we’re here.</h1>
					<p className='my-6 md:text-lg'>Whether you need an alternative to working from home or a hybrid solution for the team, we’re here to help. Complete this form and our team will reach out to learn more about your unique workplace needs.</p>
					<form id='lead' onSubmit={submitForm}>
						<div className='mb-4 flex flex-col gap-4 sm:flex-row'>
							<input className={formSuccess ? 'input-field-disabled' : 'input-field'} type='text' placeholder='Full name*' value={name} onChange={e => setName(e.target.value)} required disabled={formSuccess ? true : false} />
							<input className={formSuccess ? 'input-field-disabled' : 'input-field'} type='email' placeholder='Email address*' value={email} onChange={e => setEmail(e.target.value)} required disabled={formSuccess ? true : false} />
						</div>
						<div className='mb-4 flex flex-col  gap-4 sm:flex-row'>
							<input className={formSuccess ? 'input-field-disabled' : 'input-field'} type='tel' placeholder='Telephone number*' value={telephone} onChange={e => setTelephone(e.target.value)} required disabled={formSuccess ? true : false} />
							<input className={formSuccess ? 'input-field-disabled' : 'input-field'} type='text' placeholder='Country*' value={country} onChange={e => setCountry(e.target.value)} required disabled={formSuccess ? true : false} />
						</div>
						<div className='mb-4 flex flex-col  gap-4 sm:flex-row'>
							<input className={formSuccess ? 'input-field-disabled' : 'input-field'} type='text' placeholder='Company name' value={company} onChange={e => setCompany(e.target.value)} disabled={formSuccess ? true : false} />
							<input className={formSuccess ? 'input-field-disabled' : 'input-field'} type='number' placeholder='Team size' value={teamSize} onChange={e => setTeamSize(e.target.value)} disabled={formSuccess ? true : false} />
							{formSuccess ? <div className='cursor-not-allowed border-slate-400 bg-slate-400 px-6 py-3 text-white'>Submit</div> : <input className='border-blue-700 bg-blue-700 px-6 py-3 text-white' type='submit' value='Submit' />}
						</div>
						<p className='text-xs'>
							By clicking Sign Up you're confirming that you agree with our{' '}
							<a className='underline' href='https://www.semoud.com'>
								Terms and Conditions
							</a>
							.
						</p>
						{formError && <FormError message={formError} />}
						{formSuccess && <FormSuccess message={formSuccess} />}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Hero;
