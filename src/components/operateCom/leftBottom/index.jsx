import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import Border from '../../border'

import './index.less'

export default class Rent extends Component {

  lineChartOption = () => {
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
        name: '元/平米',
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
          type: 'line',
          itemStyle: {
            color: '#E734A6'
          },
          showSymbol: false,
          areaStyle: {
            show: true,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(237,52,167,1)'},
                {offset: 0.5, color: 'rgba(237,52,167,0.6)'},
                {offset: 1, color: 'rgba(237,52,167,0)'}
              ]
            )
          },
          data: [6, 8, 9, 7, 11, 13, 15]
        }
      ]
    }
  }

  render () {
    const lineList = Array.from(Array(20), (v,k) =>k)
    return (
      <div className='comein-about-wrap'>
        <Border width={463} height={456} title={'月平均租金走势'} unit={'(近6个月)'} lineList={lineList} size={16}></Border>
        <ReactEcharts className='chart-ele'
          option={this.lineChartOption()}
          style={{height: '100%', width: '100%'}}
        />
      </div>
    )
  }
}