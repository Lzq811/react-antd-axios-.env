/* 页面头部中间的客流数据 */

import React, {Component} from 'react'

import './index.less'

export default class PassengerNum extends Component {

  state = {
    yestoday: 65243,
    today: 145345,
    yestodayStr: '',
    todayStr: ''
  }

  computedYestodayNum = () => {
    const {yestoday} = this.state
    let init = 0
    let step = parseInt(yestoday / 60)
    let timer1 = setInterval(() => {
      init += step
      if (init >= yestoday) {
        clearInterval(timer1)
        init = yestoday
      }
      this.setState({
        yestodayStr: init > 1000 ? init.toLocaleString() : init
      })
    }, 10)
  }

  computedTodayNum = () => {
    const {today} = this.state
    let init = 0
    let step = parseInt(today / 60)
    let timer2 = setInterval(() => {
      init += step
      if (init >= today) {
        clearInterval(timer2)
        init = today
      }
      this.setState({
        todayStr: init > 1000 ? init.toLocaleString() : init
      })
    }, 10)
  }

  componentDidMount () {
    this.computedYestodayNum()
    this.computedTodayNum()
    setInterval(() => {
      this.computedYestodayNum()
      this.computedTodayNum()
    }, 20000) // 20s执行一次
  }

  render () {
    const { yestodayStr, todayStr } = this.state
    return (
      <div className='passenger-num-wrap'>
        <div className='num-item'>
          <div className='value'> {yestodayStr} <span className='unit'>人</span> </div>
          <div className='title'>街区昨日客流</div>
        </div>
        <div className='num-item'>
          <div className='value'>{todayStr} <span className='unit'>人</span> </div>
          <div className='title'>街区当日累计客流</div>
        </div>
      </div>
    )
  }
}