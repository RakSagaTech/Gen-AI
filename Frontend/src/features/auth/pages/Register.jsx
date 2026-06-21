  import '../auth.form.scss'

  const Login = () => {
    return (
      <main>
        <div className="form-container">
          <h1>Register</h1>
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
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email"
                id="email "
                name="email"
                placeholder="Enter email address"
              />
            </div>
            <button className="button primary-button">Register</button>
          </form>
        </div>
      </main>
    )
  }

  export default Login