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
        name: '单位:亿元',
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
          smooth: true,
          showSymbol: false,
          itemStyle: {
            color: '#0282EB'
          },
          areaStyle: {
            show: true,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(3,134,241,1)'},
                {offset: 0.5, color: 'rgba(3,134,241,0.6)'},
                {offset: 1, color: 'rgba(3,134,241,0)'}
              ]
            )
          },
          data: [22, 30, 33, 39, 36, 29]
        }
      ]
    }
  }

  render () {
    const lineList = Array.from(Array(20), (v,k) =>k)
    return (
      <div className='right-bottom-wrap'>
        <Border width={460} height={456} title={'月营业收入走势'} unit={'(近6个月)'} lineList={lineList} size={16}></Border>
        <ReactEcharts className='chart-ele'
          option={this.lineChartOption()}
          style={{height: '100%', width: '100%'}}
        />
      </div>
    )
  }
}