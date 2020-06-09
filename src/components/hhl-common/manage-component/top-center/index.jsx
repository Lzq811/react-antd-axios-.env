/* 头部三条数据 */

import React, {Component} from 'react'

import './index.less'

export default class TopCenter extends Component {

  render () {

    return (
      <div className='top-center-wrap'>
        <div className='item total'>
          <h4>当前交易额 (元)</h4>
          <h3>124,124</h3>
        </div>
        <div className='item times'>
          <h4>当天交易笔数 (笔)</h4>
          <h3>158</h3>
        </div>
        <div className='item price'>
          <h4>当天客单价 (元)</h4>
          <h3>768</h3>
        </div>
      </div>
    )
  }
}