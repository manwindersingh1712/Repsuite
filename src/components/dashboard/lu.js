function Lu(){
    
    const elements=[
        {src:"https://img.icons8.com/fluent/24/000000/youtube-play.png",
         name:"Rachna Ranade"},
        {src:"https://img.icons8.com/fluent/24/000000/instagram-new.png",
          name:"Rachna.ranade3"},
        {src:"https://img.icons8.com/fluent/24/000000/facebook-new.png",
        name:"Rachna Ranade"},
        {src:"https://img.icons8.com/fluent/24/000000/instagram-new.png",
        name:"Rachna.ranade3",}];
    return (
        <div className="lu">

            <div className="title1"><h4>Pages and Channels</h4></div>
            {
                elements.map(val=>{
                    return <div className="checkbox">
                    <div className="center">
                        <label className="checkbox-wrapper">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="name">{val.name}</div>
                    <div className="icon"><img src={val.src}/></div>    
            </div>
                })
            
            }
            <div className="title1"><h4>Status</h4></div>
            <div className="status1">
            <div>
                    <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <span className="checkmarkstatus"></span>
                    </label>
                </div>
                <div>Requires Manual Action.</div>
            </div>
            <div className="status1">
                <div>
                    <label className="checkbox-wrapper">
                        <input type="checkbox" checked/>
                        <span className="checkmarkstatus"></span>
                    </label>
                </div>
                <div>Marked as safe by:</div>
            </div>
            <div className="status2">
                <div>
                    <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <span className="checkmarkstatus"></span>
                    </label>
                </div>
                <div>Manual Action</div>
            </div>
            <div className="status2">
                <div>
                    <label className="checkbox-wrapper">
                        <input type="checkbox"  />
                        <span className="checkmarkstatus"></span>
                    </label>
                </div>
                <div>AI</div>
            </div>
            <div className="status1">
                <div>
                    <label className="checkbox-wrapper">
                        <input type="checkbox" checked />
                        <span className="checkmarkstatus"></span>
                    </label>
                </div>
                <div>Hidden By:</div>
            </div>
            <div className="status2">
                <div>
                    <label className="checkbox-wrapper">
                        <input type="checkbox"  />
                        <span className="checkmarkstatus"></span>
                    </label>
                </div>
                <div>Manual Action</div>
            </div>
            <div className="status2">
                <div>
                    <label className="checkbox-wrapper">
                        <input type="checkbox"  />
                        <span className="checkmarkstatus"></span>
                    </label>
                </div>
                <div>AI</div>
            </div>
            <div className="status2">
        <div>
             <label className="checkbox-wrapper">
                 <input type="checkbox" />
                 <span className="checkmarkstatus"></span>
             </label>
         </div>
         <div>Keywords</div>
     </div>

        </div>);
}

export default Lu;