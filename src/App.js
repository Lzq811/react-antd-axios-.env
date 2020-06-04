/* 应用跟组件 */

import React, { Component } from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import flex from './utils/flex'

// import Login from './pages/login/login'
// import Admin from './pages/admin/admin'
import Hhldevelop from './pages/HHL-screen/develop'
import Hhlpassenger from './pages/HHL-screen/passenger'


class App extends Component {

  componentDidMount () {
    flex()
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path='/login' component={Login}/> */}
          {/* <Route path='/admin' component={Admin}/> */}
          <Route path='/hhl/develop' component={Hhldevelop}/>
          <Route path='/hhl/passenger' component={Hhlpassenger}/>
          <Route path='/' component={Hhlpassenger}/>
          {/* <Route path='/' component={Login}/> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App