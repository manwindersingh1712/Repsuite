import { useState } from "react";

function Left() {
       
    const [flag,setToggle] =useState(false);
    
    const toggleFlag=()=>{
        flag ? setToggle(false):setToggle(true);
    }

    
    return (
        <div className="auth">
            <div className="grid">
                <form action="/dashboard">
                    <div className="head">
                        <h1>Hey There </h1>
                        <img src="https://img.icons8.com/emoji/62/000000/waving-hand-emoji.png"/>
                    </div>
                
                <div className="subtitle">
                    Welcome to Rep<span>suite</span>.
                </div>
                <div className="email">
                    <div>Email</div>
                    <input type="email" name="email" id="email" placeholder="Enter email..." required/>
                </div>
                <div className="password">
                    <div>Password</div>
                    <input type={flag?"text":"password"} name="" id="password" placeholder="Password...." required/>
                    <i className={flag?"fas fa-eye":"fas fa-eye-slash"} onClick={toggleFlag} ></i>
                 
                    <div className="instruction">use 8 or more characters to make strong password</div>
                </div>
                <div className="btn">
                    <button type="submit">Sign in</button>
                </div>
                <div className="signup">
                    New user ? <a href="">Signup Instead</a>
                 </div>
            </form>
                <div className="ctn">
                    <hr className="hr1"/>
                    Or continue With
                    <hr className="hr2"/>
                </div>
                <div className="login_fg">
                <div>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                </div>

                <div>
                    <img src="https://img.icons8.com/color/48/000000/facebook-circled.png"/>
                </div>
                </div>
            </div>  

        </div>
    );
  }
  
  export default Left;