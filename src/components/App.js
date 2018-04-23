import React from 'react';
import Container from './Container';
import Ui from './Ui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchData} from '../actions';
import {getDate} from '../actions';

class App extends React.Component{
  
  render(){

    return(
      <div>
        <Ui/>
        <Container/>        
      </div>
    )
  }
    
  
  componentDidMount(){
    console.log('fetchdata');
    this.props.fetchData();
  }
}

function mapStateToProps(state) {
  return {...state};
}

const mapFunToProps = {
  fetchData
}





export default connect(mapStateToProps, mapFunToProps)(App)
