  import {Link} from 'react-router'
  import '../auth.form.scss'

  const Login = () => {
    return (
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form >
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <button className="button primary-button">Submit</button>
          </form>
          <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
        </div>
      </main>
    )
  }

  export default Login