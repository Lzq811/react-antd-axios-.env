/* 近6月客流走势 */

import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import './index.less'

export default class PassengerTrend extends Component {

  state = {}

  passengerBar = () => {
    return {
      tooltip: {},
      grid: {
        left: '4%',
        right: '4%',
        top: '4%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          interval: 0,
          rotate: -45,
          fontSize: 14
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: val => val + '%'
        }
      },
      series: [
        {
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#2BE6FD'},
                {offset: 0.5, color: '#17B2ED'},
                {offset: 1, color: '#0076DA'}
              ]
            )
          },
          data: [27, 21, 18, 10, 8]
        }
      ]
    }
  }

  componentDidMount () {

  }

  render () {

    return (
      <div className='passenger-trend-wrap'>
        <h3 className='title'> <span className='icon'></span> 近6个月客流走势</h3>
        <div className='passenger-trend-cotent'>
          <ReactEcharts
            option={this.passengerBar()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
      </div>
    )
  }
}