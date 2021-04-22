import React,{Component} from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
//import robots from './robots.js' using api instead of this local file
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary'
class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ""
		}
	}
	 componentDidMount(){           // it is a part of hook lifecycle
	 	fetch('https://jsonplaceholder.cypress.io/users')
	 	.then(response=> response.json())
	 	.then(users => this.setState({ robots:users }));
	 }
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}
	render(){
		const filteredRobots = this.state.robots.filter( robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if(this.state.robots.length===0){
			return <h1>Loading . . .  .</h1>
		}else{
			return(
			<div className="tc">
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<Cardlist robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
			)
		}
	}
}
export default App;