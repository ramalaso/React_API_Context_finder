import { useState, useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';
import GithubContext from '../context/github/GithubContext';

function UserSearch() {
	const [text, setText] = useState();

	const { users, searchUsers, clearUsers } = useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text === '' || typeof text === 'undefined') {
			setAlert('Please enter something', 'error');
		} else {
			// Todo search results
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div className='grid-grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			<div>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<div className='relative'>
							<input
								type='text'
								className='w-full pr-40 bg-gray-200 input input-lg text-black'
								placeholder='Search'
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>Go</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button className='btn btn-primary btn-lg w-36 my-5' onClick={clearUsers}>
						Clear
					</button>
				</div>
			)}
		</div>
	);
}

export default UserSearch;
