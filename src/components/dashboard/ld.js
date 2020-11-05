function Ld(){

    const elements=[
        {v1:2,v2:3,name:"Accounts Connected",class:"big"},
        {v1:5000,v2:10000,name:"Comments Processed",class:"small"}
    ];

    
    
return(
    <div className="ld">
    <div><h4>Plan Usage</h4></div>
{
    elements.map(val=>{
        return  <div>
            <div className="h1">{val.name}</div>
                <div><hr className={val.class}/></div>
            <div className="h2"> {val.v1} of {val.v2}</div>
        </div>
    })
}
        
    </div>
);

}

export default Ld;