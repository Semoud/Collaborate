import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

const FormError = ({ title, message }) => {
	return (
		<div className='mt-4 flex border border-red-500 bg-red-100 py-3 px-5'>
			<ExclamationCircleIcon class='mr-4 mt-1 h-6 w-6' />
			<div>
				<p className='text-lg font-semibold'>{title ? title : 'Looks like something went wrong!'}</p>
				<p>{message ? message : 'Please check your input and try again.'}</p>
			</div>
		</div>
	);
};

export default FormError;
