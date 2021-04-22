// import React,{fragments} from 'react';
import './Card.css';
const Card=(props)=>{ 
		return(
			<div className='tc card bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
				<img src={`https://robohash.org/${props.id}/200x200`} alt="Profile pic"/>
				<div className='card__info'>
					<p>{props.name}</p>
					<p>{props.email}</p>
				</div>
			</div>
			);
}
export default Card;