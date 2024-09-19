import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetPodoga from './GetPodoga';

const CityParams = () => {

	const {city} = useParams();
	let [data, setData] = useState();


	useEffect(
		() =>{
			fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=b9f43491a50048873441066575afef59`)
				.then(response => response.json())
				.then(json => setData(json));

			}, []
	)

	if (data !== undefined){
		//data = data[0];
		return (
			<div>
				<GetPodoga data={data} city={city}/>
			</div>
		);
		}
};

export default CityParams;