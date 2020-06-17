/* 应用跟组件 */

import React, { Component } from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import flex from './utils/flex'

// import Login from './pages/login/login'
// import Admin from './pages/admin/admin'
import HhlManage from './pages/HHL-screen/manage'
import HhlPassenger from './pages/HHL-screen/passenger'
import HhlMember from './pages/HHL-screen/member'


class App extends Component {

  componentDidMount () {
    // flex()
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/manage' component={HhlManage}/>
          <Route path='/passenger' component={HhlPassenger}/>
          <Route path='/member' component={HhlMember}/>
          <Route path='/' component={HhlMember}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App