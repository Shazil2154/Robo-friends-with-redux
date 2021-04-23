import React,{Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Cardlist from '../components/Cardlist';
//import robots from './robots.js' using api instead of this local file
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import { requestRobots, setSearchField } from '../action.js';
const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}
class App extends Component {

	 componentDidMount(){           // it is a part of hook lifecycle
	 	this.props.onRequestRobots();
	 }
	render(){
		const {searchField, onSearchChange,robots, isPending} = this.props;
		const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(isPending){
			return <h1>Loading . . .  .</h1>
		}else{
			return(
			<div className="tc">
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchChange={onSearchChange} />
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
export default connect(mapStateToProps,mapDispatchToProps)(App);