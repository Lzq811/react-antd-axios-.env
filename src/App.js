/* 应用跟组件 */

import React, { Component } from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import flex from './utils/flex'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Develop from './pages/develop' // 发展
import Growth from './pages/growth' // 成长
import Innovate from './pages/innovate' // 创新
import Operate from './pages/operate' // 经营
import Passenger from './pages/passenger' // 客流
import Radiation from './pages/radiation' // 辐射


class App extends Component {

  componentDidMount () {
    flex()
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/develop' component={Develop}/>
          <Route path='/growth' component={Growth}/>
          <Route path='/innovate' component={Innovate}/>
          <Route path='/operate' component={Operate}/>
          <Route path='/passenger' component={Passenger}/>
          <Route path='/radiation' component={Radiation}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App