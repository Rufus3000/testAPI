import React from 'react'
import {connect} from 'react-redux'
import {getDate} from '../actions'

class Ui extends React.Component{
    manageClick(date)
    {
        this.props.getDate(date);
    }
    render(){
        if(this.props.data)
    {
      var data = this.props.data;
    }
        return(
            <div>
            <input type='date' id='kalendar'/>
            <button onClick={() => this.manageClick(document.getElementById("kalendar").value)}>Click me</button>
            <div>{data }</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    
    data: state.date
  }}
  
  const mapDispatchToProps = {
    getDate
  }

export default connect(mapStateToProps, mapDispatchToProps)(Ui)