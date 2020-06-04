import React, {Component} from 'react'

import moment from 'moment'

import './index.less'

export default class Header extends Component {

  state = {
    date: `${moment().format('YYYY')}年 ${moment().format('MM')}月 ${moment().format('DD')}日`,
    week: moment().format('dddd'),
    weather: '雷阵雨',
    time: moment().format('HH:mm:ss')
  }

  formatDate () {
    setInterval(() => {
      const date = `${moment().format('YYYY')}年 ${moment().format('MM')}月 ${moment().format('DD')}日`
      const time = moment().format('HH:mm:ss')
      let week = ''
      let weeknum = moment().day()
      switch (weeknum) {
        case 1:
          week = '星期一'
          break
        case 2:
          week = '星期二'
          break
        case 3:
          week = '星期三'
          break
        case 4:
          week = '星期四'
          break
        case 5:
          week = '星期五'
          break
        case 6:
          week = '星期六'
          break
        case 0:
          week = '星期日'
          break
        default:
          week = '星期日'
      }
      this.setState({date, time, week})
    }, 1000)
  }

  componentDidMount () {
    this.formatDate()
  }

  render () {
    const {date, weather, week, time} = this.state
    return (
      <div className='header-wrap'>
        <div className='left-logo'>
          <img className='logo' width='200' src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/logo.png' alt=''/>
        </div>
        <div className='center-title'>
          <div className='title'>{this.props.title}</div>
        </div>
        <div className="right-time">{date}&nbsp;&nbsp;{time}&nbsp;&nbsp;{week}&nbsp;&nbsp;{weather}</div>
      </div>
    )
  }
}