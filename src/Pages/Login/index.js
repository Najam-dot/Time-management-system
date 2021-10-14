import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LoginUser } from '../../store/actions/loginAction'
import { Link } from 'react-router-dom'
import styles from './login.module.css'
const Login = () => {
  let dispatch = useDispatch()
  // const state = useSelector((state) => state.loginReducer)
  let history = useHistory()
  const [user, setUser] = useState({ email: '', password: '' })
  // const [data, setData] = useState([])
  const changeEmailHandler = (e) => {
    return setUser({ ...user, email: e.target.value })
  }
  const signIn = () => {
    if (user.email && user.password) {
      dispatch(LoginUser(user, history))
    } else {
      alert('please input required feild')
    }
  }
  const changePasswordHandler = (e) => {
    return setUser({ ...user, password: e.target.value })
  }

  return (
    <section className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.loginWrap}>
          <form>
            <span className={styles.signIn}>Sign In</span>
            {/* <label>UserName/Email</label> */}
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={changeEmailHandler}
            ></input>
            {/* <label>Password</label> */}
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={changePasswordHandler}
            ></input>
          </form>
          <button type="submit" className={styles.signInBtn} onClick={signIn}>
            Sign In
          </button>
          {/* <button className={styles.signUpBtn}>Sign Up</button> */}
          <div className={styles.signUpBtn}>
            <span>New here? </span>
            <Link className={styles.linkColor} to="/signup">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
