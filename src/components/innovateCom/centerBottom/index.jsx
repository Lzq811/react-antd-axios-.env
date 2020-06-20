/* 租金总租金，月租金单价走势 */

import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import Border from '../../border'

import './index.less'

export default class Rent extends Component {

  barChartOption = () => {
    return {
      title: {show: false},
      grid: {
        top: '30%',
        bottom: '10%',
        right: '8%',
        left: '10%',
        containLabel: true
      },
      legend: {
        show: false
      },
      xAxis: {
        type: 'category',
        axisLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 18
          },
          formatter: '{value}%'
        },
      },
      series: [
        {
          type: 'bar',
          barWidth: '36%',
          barGap: '50%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(52,185,255,1)'},
                {offset: 1, color: 'rgba(2,53,234,1)'}
              ]
            )
          },
          data: [14, 22, 25, 31, 28, 21]
        }
      ]
    }
  }

  render () {
    const lineList = Array.from(Array(30), (v,k) =>k)
    return (
      <div className='bottom-center-wrap'>
        <Border width={664} height={458} lineList={lineList} title={'文化业态消费规模走势'} unit={'(近6个月)'} size={16}></Border>
        <ReactEcharts className='chart-ele'
          option={this.barChartOption()}
          style={{height: '100%', width: '100%'}}
        />
      </div>
    )
  }
}