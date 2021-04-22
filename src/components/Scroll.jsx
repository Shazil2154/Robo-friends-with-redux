const Scroll = (props)=>{
	console.log(props);
	return (
		<div style={{
			overflow:'scroll',
			border: '5px solid black',
			height: '460px'
		}}>
			{props.children}
		</div>
	)
}
export default Scroll;