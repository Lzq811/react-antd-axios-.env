/* 应用跟组件 */

import React, { Component } from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import flex from './utils/flex'

// import Login from './pages/login/login'
// import Admin from './pages/admin/admin'
import HhlManage from './pages/HHL-screen/manage'
import HhlPassenger from './pages/HHL-screen/passenger'


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
          <Route path='/manage' component={HhlManage}/>
          <Route path='/passenger' component={HhlPassenger}/>
          <Route path='/' component={HhlManage}/>
          {/* <Route path='/' component={Login}/> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App