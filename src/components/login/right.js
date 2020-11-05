import lady from '../../images/lady.PNG';

function Right(props){
    return(
        <div className="svg"> 
            <div className="grid">
                <img src={lady} alt="ladyImage"/>
                <div className="flexingrid">
                    <p><i className="fas fa-comment"></i>   Fully Automated Comment Moderation</p>
                </div>
                <div className="flexingrid">
                    <p><i className="fas fa-sync-alt"></i>  Take a backseat while we automate your repo</p>
                </div>
                <div className="flexingrid">
                    <p><i className="fas fa-rupee-sign"></i>    Start with a free trial</p>
                </div>
                <div className="flexingrid">
                    <p><i className="fas fa-thumbs-up"></i>  Best SAAS in the industry</p>
                </div>
            </div>
        </div>
    );
}


export default Right;