/* 头部三条数据 */

import React, {Component} from 'react'

import './index.less'

export default class TopCenter extends Component {

  state = {
    total: 123923,
    totalStr: '',
    times: 188,
    timesStr: '',
    price: 708,
    priceStr: ''
  }

  computedNum = () => {
    const {total, times, price} = this.state
    let init = 0
    let init2 = 0
    let init3 = 0
    let step = parseInt(total / 60)
    let step2 = parseInt(times / 60)
    let step3 = parseInt(price / 60)
    let timer = setInterval(() => {
      init += step
      init2 += step2
      init3 += step3
      if (init >= total && init2 >= times && init3 >= price) {
        clearInterval(timer)
        init = total
        init2 = times
        init3 = price
      }
      this.setState({
        totalStr: init > 1000 ? init.toLocaleString() : init,
        timesStr: init2 > 1000 ? init2.toLocaleString() : init2,
        priceStr: init3 > 1000 ? init3.toLocaleString() : init3,
      })
    }, 10)
  }

  componentDidMount () {
    this.computedNum()
    setInterval(() => {
      this.computedNum()
    }, 20000)
  }

  render () {
    const {totalStr, timesStr, priceStr} = this.state
    return (
      <div className='top-center-wrap'>
        <div className='item total'>
          <h4>当前交易额 (元)</h4>
          <h3>{totalStr}</h3>
        </div>
        <div className='item times'>
          <h4>当天交易笔数 (笔)</h4>
          <h3>{timesStr}</h3>
        </div>
        <div className='item price'>
          <h4>当天客单价 (元)</h4>
          <h3>{priceStr}</h3>
        </div>
      </div>
    )
  }
}