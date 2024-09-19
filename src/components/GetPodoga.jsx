import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GetPogoda.css';

const GetPodoga = (props) => {

let data = props.data;
let lat = data[0].lat;
let lon = data[0].lon;


let [pogoda, setPogoda] = useState();

useEffect(
	() =>{
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9f43491a50048873441066575afef59&lang=ru`)
			.then(response => response.json())
			.then(json => setPogoda(json));

		}, []
)

		if(pogoda !== undefined){
			let src = `http://openweathermap.org/img/w/${pogoda.weather[0].icon}.png`;

			let temp = Math.trunc(pogoda.main.temp - 273);
			if (temp > 0){
				temp = '+' + temp;
			}

			let wind = pogoda.wind.deg;
			if (wind <= 24 || wind >= 336){
				wind = 'C';
			}
			if (wind > 24 && wind < 66){
				wind = 'CB';
			}
			if (wind >= 66 && wind <= 114){
				wind = 'B';
			}

			if (wind > 114 && wind < 156){
				wind = 'ЮB';
			}

			if (wind >= 156 && wind <= 204){
				wind = 'Ю';
			}

			if (wind > 204 && wind < 246){
				wind = 'ЮЗ';
			}

			if (wind >= 246 && wind <= 336){
				wind = 'СЗ';
			}

			if (wind > 294 && wind < 246){
				wind = 'ЮЗ';
			}


			return (
				<div className='pogoda'>
					<h1>Погода</h1><h2>в городе {props.city}</h2>
						<p className='temp'>{temp}<sup>o</sup>C</p> 
						<div className="img">
						<img src={src} alt="" />
						<p>{pogoda.weather[0].description}</p>
						</div>
						<div className='pogoda_flex'> 
						<div className="wint">
						<p><img src="https://img2.freepng.ru/20180520/vgw/kisspng-wind-computer-icons-symbol-storm-clip-art-5b014729503358.3150550815268104093285.jpg" alt="" /><span> {pogoda.wind.speed} м/с,</span><span> {wind}</span></p>
						</div>
						<div className='humidity'>
						<p><img src='https://www.clipartmax.com/png/full/237-2373141_we-do-our-best-to-bring-you-the-highest-quality-cliparts-hygrometer.png'></img><span>{pogoda.main.humidity} %</span></p>	
						</div>	
						<div className='pressure'>
						<p><img src='https://www.streamlinepm.com/wp-content/uploads/2019/08/Pressure-icon-768x768.png'></img><span> {pogoda.main.humidity} мм. рт. ст.</span></p>	
						</div>
						</div>
						<Link to="/">Выбрать другой город</Link>
				</div>
			);
		}

};

export default GetPodoga;