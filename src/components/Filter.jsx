import React, { useEffect, useState } from 'react';
import MockCity from './MockCity';

const Filter = (props) => {
	let link = props.link;
	let [cityNew, setCityNew] = useState();
	let cityArray = [];

	useEffect(
		() =>{
			fetch(`https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json`)
				.then(response => response.json())
				.then(json => setCityNew(json));

			}, []
	);


		if (cityNew != undefined){
			for (let i = 0; i < 10969; i++){
				cityArray[i] = cityNew.city[i].name;
			}
		}
	
	if (link != undefined && link != '' && cityNew != undefined){
		return (
			<div>
				{cityNew.city.filter(item => {
					if(item.name.toLocaleLowerCase().includes(link.toLocaleLowerCase())){
						return item;
					}
				}).map(item => <MockCity key={item.city_id} city = {item.name}/>)}			
			</div>
		);
			}
	};

export default Filter;