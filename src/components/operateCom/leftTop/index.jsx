import React, {Component} from 'react'

import Border from '../../border'

import './index.less'

export default class Rent extends Component {

  render () {

    const lineList = Array.from(Array(20), (v,k) =>k)
    return (
      <div className='innovate-left-top-wrap'>
        <Border width={460} height={644} lineList={lineList} title={'2020年6月综合数据概览'} unit={''} size={14}></Border>
        <div className='top-rent-box'>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-pig.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>100,780,000 <span>元</span> </h3>
              <h4>当月营业收入总金额</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-rent-money.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>3,564 <span>元/平米</span> </h3>
              <h4>当月租金</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-opening-num.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>269 <span>家</span> </h3>
              <h4>当月营业商户数</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-passenger.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>929 <span>人</span> </h3>
              <h4>当月从业人员数</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}