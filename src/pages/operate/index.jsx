/* 经营指数 */

import React, {Component} from 'react'

import LeftTop from '../../components/operateCom/leftTop'
import LeftBottom from '../../components/operateCom/leftBottom'
import CenterTop from '../../components/operateCom/centerTop'
import CenterBottom from '../../components/operateCom/centerBottom'
import RightTop from '../../components/operateCom/rightTop'
import RightBottom from '../../components/operateCom/rightBottom'
import Header from '../../components/header'

import './index.less'

export default class Operate extends Component {

  render () {

    return (
      <div className='operate-wrap'>
        <div className='header-container'>
          <Header title={'北京路步行街经营指数大屏'}></Header>
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