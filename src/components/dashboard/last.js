import React from 'react';
import dp from '../../images/dp.png'
import dp2 from '../../images/dp2.png'
import lab from '../../images/lab.png'

class Last extends React.Component{
    
    state={
        disabled:true,
        my_name:"Manwinder Singh",
        date:"2:03PM,Today",
        mydesc:"Lorem Ipsum text of the  industry.set sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        o_name:"1Pragya Sharma",
        odesc:"Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry.Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry . ",
        
    }
    handleChange=(e)=>{
        if(e.target.value.length>0){
            this.setState({
                disabled:false
            })
        }
    }

    render(){
        return (
            <div className="last">
                <div className="my_dp"><img src={dp} alt="Profile_pic"/></div>
                <div className="l_name">{this.state.my_name}</div>
                <div className="l_date">{this.state.date}</div>
                <div className="l_mydesc">{this.state.mydesc}</div>
                <div className="l_labimg"><img src={lab} alt="lab"/></div>
                <div className="l_odp"> <img src={dp2} alt=""/></div>
                <div className="l_oname">{this.state.o_name}</div>
                <div className="l_odate">2:03PM,Today</div>
                
                <div className="c_i1">
                    <i className="far fa-calendar-check"></i>
                </div>
                <div className="c_i2">
                    <i className="fas fa-eye-slash"></i>
                </div>
                <div className="c_i3">
                    <i className="fas fa-check"></i>
                </div>
            
                <div className="l_desc">
                    {this.state.odesc}
                </div>
                <div className="l_input"><input type="text" placeholder="Write a reply.." onChange={this.handleChange}/></div>
                <div className="l_like"> <button disabled={this.state.disabled}> Like<i className="fas fa-thumbs-up"></i></button></div>
                <div className="l_ban"><button disabled={this.state.disabled}>Ban<i className="fas fa-ban"></i></button></div>
                <div className="l_reply"><button disabled={this.state.disabled}>Reply</button></div>
            </div>
        );
    }
}

export default Last;