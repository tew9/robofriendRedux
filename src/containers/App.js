import React, { Component } from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import SearchBox from '../searchRobot/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import { setSearchField, requestUsersAction } from '../action'

//mapping the states to the props so it can be access anywhere in the app
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestUsers.users,
    ispending: state.requestUsers.ispending,
    error: state.requestUsers.error,
    
  }
}

//adding actions to the props
const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onUserRequest: () => dispatch(requestUsersAction()),  
  }
}

class App extends Component {
  //layer of react app that runs on refresh
  componentDidMount() {
    this.props.onUserRequest();//update the users request from the api
    }

  //update view with the data
  render() {
    const { searchField, robots, ispending } = this.props;
    const {onSearchChange } = this.props; 

   //return the robot according to the search field
   const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    //if users succeed or not
    return ispending ?
        <h1>Loading...</h1>:
       (
        //return the view
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll> {/*component that wrap the result in scrollbar */}
              <ErrorBoundary>{/**return error view to the user in a friendly way */}
                {/**component that returns users used for 
                 * to create users
                 */}
                <CardList robots={filteredRobots} />
              </ErrorBoundary>
              
            </Scroll>
          </div>
        );
  }
}
// connect the state and its props with the app.js and return to index file
export default connect(mapStateToProps, mapDispatchToProps)(App);