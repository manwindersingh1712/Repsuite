function Mu(props){
    const s1={backgroundColor:"rgb(233, 168, 27)"};
    const s2={backgroundColor: "rgb(1, 202, 202)"};
    return(
        <div className="mu">
            <div className="date">
                <label for="cars">Date Range:</label>
                <select name="cars" id="cars">
                    <option value="seven_d">last 7 days</option>
                    <option value="one_m">last month</option>
                    <option value="two_m">last 2 months</option>
                    <option value="four_m">last 4 months</option>
                    <option value="six_m">last 6 months</option>
                    <option value="eight_m">last 8 months</option>
                    <option value="ten_m">last 10 months</option>
                    <option value="one_y">last year</option>
                </select>
            </div>
            <div className="date_card">
                <div className="dc1">Require manual </div>
                <div className="dc2">Action </div>
                <div className="dc3">{props.state.mu.v1}</div>
                <div className="dc4"><i className="fas fa-exclamation"></i></div>
            </div>
            <div className="date_card">
                <div className="dc1">Marked as Safe </div>
                <div className="dc2"> </div>
                <div className="dc3">{props.state.mu.v2}</div>
                <div className="dc4" style={s2}><i className="far fa-calendar-check"></i></div>
            </div>
            <div className="date_card">
            <div className="dc1">Hidden    </div>
            <div className="dc2"> </div>
            <div className="dc3">{props.state.mu.v3}</div>
            <div className="dc4" style={s1}><i className="fas fa-eye-slash"></i></div>
        </div>
        </div>
    );
}

export default Mu;