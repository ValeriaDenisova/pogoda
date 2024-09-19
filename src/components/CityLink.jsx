import React, { useEffect, useState } from 'react';
import GetPodoga from './GetPodoga';

const CityLink = (props) => {

	const city = props.city;
	let [data, setData] = useState();

	useEffect(
		() =>{
			fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=b9f43491a50048873441066575afef59`)
				.then(response => response.json())
				.then(json => setData(json));

			}, []
	)

	if (data !== undefined){
		return (
			<div>
				<GetPodoga data={data} city={city}/>
			</div>
		);
		}
};

export default CityLink;