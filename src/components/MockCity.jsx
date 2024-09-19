import React from 'react';
import { Link } from 'react-router-dom';

const MockCity = (props) => {

	let city = props.city;
	const url = `/${city}`;


	return (
		<div>
			<Link className='mock' to={url}>{city}</Link>
		</div>
	);
};

export default MockCity;