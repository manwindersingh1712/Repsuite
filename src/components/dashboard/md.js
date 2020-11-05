import React from 'react';
import Card from './cards';
import dp2 from '../../images/dp2.png'

class Md extends React.Component{
    state= {elements:[
        // elements is the data 
            {desc:"Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry.Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry . "
                ,link:"https://img.icons8.com/fluent/17/000000/instagram-new.png",
                name:"1Pragya Sharma",
                date:"2:03Pm,Today" ,
                plink:"https://www.instagram.com/sr.manwinder/" },
                {desc:"Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry.Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry . "
                ,link:"https://img.icons8.com/fluent/17/000000/instagram-new.png",
                name:"2Pragya Sharma",
                date:"2:03Pm,Today" ,
                plink:"https://www.instagram.com/sr.manwinder/" },
                {desc:"Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry.Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry . "
                ,link:"https://img.icons8.com/fluent/17/000000/instagram-new.png",
                name:"3Pragya Sharma",
                date:"2:03Pm,Today" ,
                plink:"https://www.instagram.com/sr.manwinder/" },
                {desc:"Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry.Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry . "
                ,link:"https://img.icons8.com/fluent/17/000000/instagram-new.png",
                name:"4Pragya Sharma",
                date:"2:03Pm,Today" ,
                plink:"https://www.instagram.com/sr.manwinder/" },
                {desc:"Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry.Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry . "
                ,link:"https://img.icons8.com/fluent/17/000000/instagram-new.png",
                name:"5Pragya Sharma",
                date:"2:03Pm,Today" ,
                plink:"https://www.instagram.com/sr.manwinder/" },
                {desc:"Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry.Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry . "
                ,link:"https://img.icons8.com/fluent/17/000000/instagram-new.png",
                name:"6Pragya Sharma",
                date:"2:03Pm,Today" ,
                plink:"https://www.instagram.com/sr.manwinder/" },
                {desc:"Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry.Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry .Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry piyush Pragya should marry . "
                ,link:"https://img.icons8.com/fluent/17/000000/instagram-new.png",
                name:"7Pragya Sharma",
                date:"2:03Pm,Today" ,
                plink:"https://www.instagram.com/sr.manwinder/" }
            ]}

    delCard=(index, e)=>{
        const elements=[...this.state.elements];
        elements.splice(index,1);
        this.setState({elements:elements})

    }

    render(){
        
    var style={
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"grey",
        fontSize:"x-large",
    }

    if(this.state.elements.length>0){
     
    return( 
        <div className="md">
        <div className="comment">Showing {this.state.elements.length} comments</div>
        {
            this.state.elements.map((val,index)=>{
                return <Card 
                dp2={dp2} 
                name={val.name}
                link={val.link}
                date={val.date}
                plink={val.plink}   
                desc={val.desc} 
                delCard={this.delCard.bind(this,index)}
                key={val.name+val.date}
                 />

            })
       
        }

        

    </div>
    );
    }else{
        return (
            <div className="md">
        <div className="no" style={style}>
            No Comments Left
        </div>
        
        </div>
        )
    }
}


}

export default Md;