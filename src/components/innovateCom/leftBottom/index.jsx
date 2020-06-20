/* 租金总租金，月租金单价走势 */

import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import Border from '../../border'

import './index.less'

export default class Rent extends Component {

  chartOption = () => {
    return {
      title: {show: false},
      grid: {
        top: '30%',
        bottom: '10%',
        right: '8%',
        left: '10%',
        containLabel: true
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
        name: '单位:万元',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#fff',
          fontSize: 16
        },
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
          }
        },
      },
      series: [
        {
          type: 'bar',
          barWidth: '36%',
          // roundCap: true, // 仅在极坐标生效
          itemStyle: {
            color: '#FF54BD'
          },
          data: [6, 8, 9, 7, 11, 13]
        }
      ]
    }
  }

  render () {
    const lineList = Array.from(Array(20), (v,k) =>k)
    return (
      <div className='comein-about-wrap'>
        <Border width={463} height={456} title={'体验业态消费规模走势'} unit={''} lineList={lineList} size={16}></Border>
        <ReactEcharts className='chart-ele'
          option={this.chartOption()}
          style={{height: '100%', width: '100%'}}
        />
      </div>
    )
  }
}