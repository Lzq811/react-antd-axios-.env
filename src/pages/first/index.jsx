/* 商圈指数 */

import React, {Component} from 'react'

import Map from '../../components/firstCom/map'
import TopCenter from '../../components/firstCom/topCenter'
import Bottom from '../../components/firstCom/bottom'
import Header from '../../components/header'
import './index.less'

export default class First extends Component {

  render () {

    return (
      <div className='first-wrap'>
        <div className='map-container'>
          <Map></Map>
        </div>
        <div className='mask-layer'>
          <div className='header-container'>
            <Header title={'北京路步行街商圈大数据平台'}></Header>
            <div className='logo'>
              <img width='100%' src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/logo.png' alt='' />
            </div>
          </div>
          <div className='top-container'>
            <TopCenter></TopCenter>
          </div>
          <div className='bottom-container'>
            <Bottom></Bottom>
          </div>
        </div>
      </div>
    )
  }
}