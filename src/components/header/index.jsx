/* 通用大屏头部 */

import React, {Component} from 'react'

import './index.less'

export default class Header extends Component {

  state = {
    year: '',
    date: '',
    week: '',
    time: '',
    weather: '晴天 28~31°C'
  }

  formatter = () => {
    const year = new Date().getFullYear() + '年'
    const date = `${(new Date().getMonth() + 1) >= 10 ? (new Date().getMonth() + 1) : '0' + (new Date().getMonth() + 1)}月${new Date().getDate() >= 10 ? new Date().getDate() : '0' + new Date().getDate()}日`
    const time = `
      ${new Date().getHours() >= 10 ? new Date().getHours() : '0' + new Date().getHours()}:
      ${new Date().getMinutes() >= 10 ? new Date().getMinutes() : '0' + new Date().getMinutes()}:
      ${new Date().getSeconds() >= 10 ? new Date().getSeconds() : '0' + new Date().getSeconds()}
    `
    const weekList = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const weekNum = new Date().getDay()
    const week = weekList[weekNum]
    this.setState({year, date, week, time})
  }

  componentDidMount () {
    this.formatter()
    this.timer = setInterval(this.formatter, 1000)
  }

  componentWillUnmount () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render () {
    const {year, date, week, time, weather} = this.state
    const {title} = this.props
    return (
      <div className='heder-common-wrap'>
        <div className='left-logo'></div>
        <div className='center-title'>{title}</div>
        <div className='right-time'>
          <p>{year}{date}&nbsp;&nbsp;{weather}</p>
          <p>{week}&nbsp;&nbsp;{time}</p>
        </div>
      </div>
    )
  }
}