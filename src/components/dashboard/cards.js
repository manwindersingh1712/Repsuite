function Cards(props){

    return <div className="card">
    <div className="c_dp"><img src={props.dp2} alt=""/></div>
    <div className="c_name"> {props.name} </div>
    <div className="c_date"> {props.date} </div>
    <div className="c_icon" onClick={props.delCard}><i className="fas fa-exclamation" ></i></div>
    <div className="c_description" maxlength="2">
        {props.desc}
    </div>
    <div className="c_show"><i className="fas fa-chevron-right"></i></div>
    <div className="c_link">
        <a href={props.plink}>
        <div className="c_social">
            <img src={props.link} alt="icon"/>
            <p>
                sr.manwinder
            </p>   
        </div>
        </a>    
    </div>

    <div className="c_i1" onClick={props.delCard} >
            <i className="far fa-calendar-check" ></i>
    </div>
    <div className="c_i2" onClick={props.delCard}>
            <i className="fas fa-eye-slash"></i>
    </div>
    <div className="c_i3" onClick={props.delCard}>
        <i className="fas fa-check"></i>
    </div>

</div>
}


export default Cards;