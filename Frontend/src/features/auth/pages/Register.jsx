  import {Link, useNavigate} from 'react-router'
  import {useState} from 'react'
  import {useAuth} from '../hooks/useAuth'
  import '../auth.form.scss'

  const Login = () => {

    const navigate = useNavigate()
    const {loading, handleRegister} = useAuth()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit = async (e) =>{
      e.preventDefault()
      await handleRegister({username, password, email})
      navigate('/')
    }

    if(loading){
      return (<main><h1>Loading....!</h1></main>)
    }

    return (
      <main>
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                onChange={(e) => {setUsername(e.target.value)}}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email"
                id="email"
                name="email" 
                placeholder="Enter email address"
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </div>
            <button type="submit" className="button primary-button">Register</button>
          </form>
          <p>Already have an account? <Link to={"/login"}>Login</Link></p>
        </div>
      </main>
    )
  }

  export default Login