/* 人地关系 */

import React, {Component} from 'react'

import './index.less'

export default class Relation extends Component {

  state = {
    tabsData: [
      {name: '常驻省份', value: 'province'},
      {name: '常驻城市', value: 'city'},
      {name: '常驻行政区', value: 'area'},
      {name: '常驻商圈', value: 'circle'}
    ],
    currentTab: 'province', // 默认第一个激活状态
    currentTabContent: [
      { order: '01', name: '安徽省' },
      { order: '02', name: '河北省' },
      { order: '03', name: '广东省' },
      { order: '04', name: '河南省' },
      { order: '05', name: '北京市' },
      { order: '06', name: '上海市' },
      { order: '07', name: '重庆市' },
      { order: '08', name: '四川省' },
      { order: '09', name: '云南省' },
      { order: '10', name: '湖南省' }
    ],
    currentItemIndex: 0, // 默认第一个激活状态
  }

  tabsClick = (value) => {
    this.setState({
      currentTab: value
    })
  }

  autoToggleItem = () => {
    const { currentTabContent} = this.state
    let index = 0
    setInterval(() => {
      index++
      if (index > currentTabContent.length - 1) {
        index = 0
      }
      this.setState({
        currentItemIndex: index
      })
    }, 6000)
  }

  componentDidMount () {
    this.autoToggleItem()
  }

  render () {
    const { tabsData, currentTab, currentTabContent, currentItemIndex} = this.state
    return (
      <div className='relation-wrap'>
        <h3 className='title'> <span className='icon'></span> 人地关系</h3>
        <div className='tabs-container'>
          {
            tabsData.map(item => (
              <div key={item.value} className={`tab-item ${currentTab === item.value ? 'active' : null}`} onClick={() => {this.tabsClick(item.value)}}>{item.name}</div>
            ))
          }
        </div>
        <div className='tab-content'>
          {
            currentTabContent.map((item, index) => (
              <div key={item.order} className={`item ${currentItemIndex === index ? 'active' : null}`}>{item.order}&nbsp;{item.name}</div>
            ))
          }
        </div>
      </div>
    )
  }
}