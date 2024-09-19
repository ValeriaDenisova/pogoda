import React, { createRef, useEffect, useState } from 'react';
import CityLink from './CityLink';
import Filter from './Filter';

const City = () => {

	let [city, setCity] = useState();
	const refCity = createRef();
	let [link, setLink] = useState();

	function handleCity(){
		setCity(refCity.current.value);
		
	}

	function handleLink(){
		setLink(refCity.current.value);
	}

	

	if(city == undefined){

		return (
			<div>
				<form action="" onSubmit={handleCity}>
					<p>Введите город:</p>
					<input type="text" ref={refCity} onChange={handleLink}/>
					<input type="submit" placeholder="Узнать погоду" />
				</form>
				<Filter link={link}/>
			</div>
		);
	}
	else{
		return <CityLink city={city} />
	}
};

export default City;