/* 成长指数 */
/* 分 6 模块来写，left-top center-top right-top left-bottom center-bottom right-bottom */

import React, {Component} from 'react'

import LeftTop from '../../components/growthCom/leftTop'
import LeftBottom from '../../components/growthCom/leftBottom'
import CenterTop from '../../components/growthCom/centerTop'
import CenterBottom from '../../components/growthCom/centerBottom'
import RightTop from '../../components/growthCom/rightTop'
import RightBottom from '../../components/growthCom/rightBottom'
import Header from '../../components/header'

import './index.less'

export default class Growth extends Component {
  
  render () {

    return (
      <div className='growth-wrap'>
        <div className='header-container'>
          <Header title={'北京路步行街成长指数大屏'}></Header>
        </div>
        <div className='top-container'>
          <div className='left'>
            <LeftTop></LeftTop>
          </div>
          <div className='center'>
            <CenterTop></CenterTop>
          </div>
          <div className='right'>
            <RightTop></RightTop>
          </div>
        </div>
        <div className='bottom-container'>
          <div className='left'>
            <LeftBottom></LeftBottom>
          </div>
          <div className='center'>
            <CenterBottom></CenterBottom>
          </div>
          <div className='right'>
            <RightBottom></RightBottom>
          </div>
        </div>
      </div>
    )
  }
}