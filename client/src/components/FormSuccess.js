import { CheckCircleIcon } from '@heroicons/react/24/outline';

const FormSuccess = ({ title, message }) => {
	return (
		<div className='mt-4 border border-slate-500 bg-slate-100 py-3 px-5 sm:flex'>
			<CheckCircleIcon class='mb-1 h-6 w-6 sm:mr-4 sm:mt-1' />
			<div>
				<p className='text-lg font-semibold'>{title ? title : 'Thanks for getting in contact!'}</p>
				<p>{message ? message : 'A sales representative from our team will be in touch soon.'}</p>
			</div>
		</div>
	);
};

export default FormSuccess;
