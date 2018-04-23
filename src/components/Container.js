import React from 'react'
import ReactTables from 'react-table'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import {bindActionCreators} from 'redux';


class Container extends React.Component{

  render(){
    if(this.props.data)
    {
      var data = this.props.data;
    }
    const columns = [{
      Header: 'KÓD',
      accessor: 'kod',
    },
    {
      Header: 'Země',
      accessor: 'zeme'
    },
    {
      Header: 'Měna',
      accessor: 'mena'
    },
    {
      Header: 'Množství',
      accessor: 'mnozstvi'
    },
    {
      Header:'Kurz',
      accessor:'kurz'
    }
    ]

    return(
      <ReactTables
        data={data}
        columns={columns}
      />
    )
    
  }

  renIt(id){
    return(
      <div>

        </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
  
  data: state.items
}}

const mapDispatchToProps = {
  onClick: fetchData
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)