import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

const FormError = ({ title, message }) => {
	return (
		<div className='mt-4 border border-red-500 bg-red-100 py-3 px-5 sm:flex'>
			<ExclamationCircleIcon class='mb-1 h-6 w-6 sm:mr-4 sm:mt-1' />
			<div>
				<p className='text-lg font-semibold'>{title ? title : 'Looks like something went wrong!'}</p>
				<p>{message ? message : 'Please check your input and try again.'}</p>
			</div>
		</div>
	);
};

export default FormError;
