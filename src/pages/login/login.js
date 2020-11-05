import './login.css';
import Left from '../../components/login/left';
import Right from '../../components/login/right';

function Login() {
    return (
      <div>
        <div class="rep">
                <h2>
                    Rep<span>suite</span>.
                </h2>
        </div>  
        <div className="container">
          <Left/>
          <Right/>
        </div>  
      </div>
  
      
    );
  }
  
  export default Login;