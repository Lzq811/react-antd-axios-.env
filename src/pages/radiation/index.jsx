/* 辐射指数 */

import React, {Component} from 'react'

import LeftTop from '../../components/radiationCom/leftTop'
import CenterTop from '../../components/radiationCom/centerTop'
import CenterBottom from '../../components/radiationCom/centerBottom'
import RightTop from '../../components/radiationCom/rightTop'
import Header from '../../components/header'

import './index.less'

export default class Radiation extends Component {

  render () {

    return (
      <div className='growth-wrap'>
        <div className='header-container'>
          <Header title={'北京路步行街辐射指数大屏'}></Header>
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
          <CenterBottom></CenterBottom>
        </div>
      </div>
    )
  }
}