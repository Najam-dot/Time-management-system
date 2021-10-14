import './App.css'
import Login from './Pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import ProtectedRoute from './ProtectedRoutes'
import Dashboard from './components/Dashboard'
import UserLogs from './Pages/UserLogs'
import Loader from './components/Loader'
function App() {
  return (
    <div className="App">
      <Loader />
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <ProtectedRoute
            path="/dashBoard"
            component={Dashboard}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/user-logs/:id"
            component={UserLogs}
          ></ProtectedRoute>
        </Switch>
      </Router>
    </div>
  )
}

export default App
