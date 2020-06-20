/* 创新指数 */

import React, {Component} from 'react'

import LeftTop from '../../components/innovateCom/leftTop'
import LeftBottom from '../../components/innovateCom/leftBottom'
import CenterTop from '../../components/innovateCom/centerTop'
import CenterBottom from '../../components/innovateCom/centerBottom'
import RightTop from '../../components/innovateCom/rightTop'
import RightBottom from '../../components/innovateCom/rightBottom'
import Header from '../../components/header'

import './index.less'

export default class Innovate extends Component {

  render () {

    return (
      <div className='innovate-wrap'>
        <div className='header-container'>
          <Header title={'北京路步行街创新指数大屏'}></Header>
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