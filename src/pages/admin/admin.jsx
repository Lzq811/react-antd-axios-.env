/* 后台管理主路由组件 */

import React, {Component} from 'react'

import {message} from 'antd'

import './admin.less'
export default class Admin extends Component {

  state = {
    screenData: [
      {
        itemName: '北京路步行街发展指数大屏', 
        pictureUrl: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/develop.png',
        targetLink: '/beijingroad/develop'
      },
      {
        itemName: '北京路步行街客流指数大屏', 
        pictureUrl: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/passenger.png',
        targetLink: '/beijingroad/passenger'
      },
      {itemName: '暂未开放', pictureUrl: '', targetLink: ''},
      {itemName: '暂未开放', pictureUrl: '', targetLink: ''},
      {itemName: '暂未开放', pictureUrl: '', targetLink: ''},
      {itemName: '暂未开放', pictureUrl: '', targetLink: ''}
    ],
    // initScreenNum: Array.from(Array(6), (v,k) =>k), // 創建一個長度為6的數組
    currentIndex: -1,
    defaultItemSrc: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/login/default.png'
  }

  handleClick = (index) => {
    const {screenData} = this.state
    console.log('点击了按钮', index)
    if (screenData[index].targetLink && screenData[index].targetLink.length > 0) {
      /* 页面跳转, push(), goback(), replace(), go()*/
      this.props.history.push('/login')
    } else {
      message.warn('当前屏幕暂未开放...')
    }
  }

  mouseEnter = (index) => {
    this.setState({
      currentIndex: index
    })
  }
  mouseLeave = () => {
    this.setState({
      currentIndex: -1
    })
  }

  componentDidMount () {
    
  }
  render() {

    const {screenData, defaultItemSrc, currentIndex} = this.state

    return ( 
      <div className='admin-warp'>
        <div className='left-top-logo'>
          <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/login/yy_white_logo.png' alt=''/>
        </div>
        <div className='title-box'>大屏列表页</div>
        <div className="right_bottom_area_anmation">
          <div className="inside_wrap">
            <div className="blue_ball"></div>
            <div className="girl_img"></div>
            <div className="boy_img"></div>
            <div className="little_ball"></div>
            <div className="little_ball_op"></div>
            <div className="gold_coin"></div>
          </div>
        </div>
        <div className='left-bottom-area'></div>
        <div className='left-bottom-desc'>
          <p>成为最有价值的</p>
          <p>商业数据决策服务提供商</p>
        </div>
        <div className='main-area'>
          {
            screenData.map((item, index) => (
              <div
                onMouseEnter={() => {this.mouseEnter(index)}}
                onMouseLeave={this.mouseLeave}
                onClick={() => {this.handleClick(index)}}
                key={item.itemName} className={`list-item ${index === currentIndex ? 'active' : null}`}
                style={{
                  backgroundImage: 'url(' + (item.pictureUrl.length > 0 ? item.pictureUrl : defaultItemSrc) + ')'
                }}>
                <h3>{item.itemName}</h3>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
