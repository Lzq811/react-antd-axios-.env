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
        bottom: '14%',
        right: '8%',
        left: '10%',
        containLabel: true
      },
      legend: {
        show: true,
        itemWidth: 16,
        itemHeight: 16,
        icon: 'roundRect',
        itemGap: 40,
        bottom: '6%',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 18
        },
        data: ['体验业态', '文化业态', '服务业态']
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
          name: '体验业态',
          type: 'bar',
          barWidth: '16%',
          barGap: '50%',
          itemStyle: {
            color: '#FD8474'
          },
          data: [14, 22, 25, 31, 28, 21]
        },
        {
          name: '文化业态',
          type: 'bar',
          barWidth: '16%',
          barGap: '50%',
          itemStyle: {
            color: '#FF63F9'
          },
          data: [24, 32, 35, 41, 38, 31]
        },
        {
          name: '服务业态',
          type: 'bar',
          barWidth: '16%',
          barGap: '50%',
          itemStyle: {
            color: '#0690FF'
          },
          data: [19, 27, 30, 36, 33, 26]
        }
      ]
    }
  }

  render () {
    const lineList = Array.from(Array(30), (v,k) =>k)
    return (
      <div className='bottom-center-wrap'>
        <Border width={664} height={458} lineList={lineList} title={'月营业收入业态组成波动'} unit={'(近6个月)'} size={16}></Border>
        <ReactEcharts className='chart-ele'
          option={this.barChartOption()}
          style={{height: '100%', width: '100%'}}
        />
      </div>
    )
  }
}