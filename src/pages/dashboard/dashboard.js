import './dashboard.css';
import Rep from '../../components/dashboard/rep'
import Lu from '../../components/dashboard/lu';
import Mu from '../../components/dashboard/mu';
import Last from '../../components/dashboard/last';
import Ld from '../../components/dashboard/ld';
import Md from '../../components/dashboard/md';
import React from 'react';

class Dashboard extends React.Component {

  state={
    mu:{
      v1:34,
      v2:128,
      v3:128
    }
  }


  render(){

    return (
      <div className="containerDash">
        <Rep/>
        <Lu/>
        <Mu state={this.state}/>
        <Last/>
        <Ld/>
        <Md />
      </div>
    );
  }

}
  
  export default Dashboard;