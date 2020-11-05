import dp from '../../images/dp.png';

function Rep() {
    return (
        <div className="rep">
            <div className="d1">
                <h2>Rep<span>suite</span>.</h2>
            </div>
            <div className="d2">
                <i className="fas fa-receipt"></i>
            </div>
            <div className="d3">
                <i className="fas fa-cog"></i>
            </div>
            <div className="d4">
                <div className="profile">
                    <div className="img">
                        <img src={dp} alt="dp"/>
                    </div>
                    <div className="text">Profile</div>
                    <div className="icon"><i className="fas fa-chevron-down"></i></div>
                    <div className="name">Manwinder Singh</div>
                </div>
            </div>
        </div>
    );
  }
  
export default Rep;