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
                placeholder="Enter Username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <button className="button primary-button">Submit</button>
          </form>
        </div>
      </main>
    )
  }

  export default Login