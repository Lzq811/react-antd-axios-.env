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
        right: '4%',
        left: '4%',
        containLabel: true
      },
      legend: {
        show: true,
        itemWidth: 16,
        itemHeight: 16,
        icon: 'roundRect',
        itemGap: 60,
        bottom: '6%',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 18
        },
        data: ['广州市客源', '华南其他地区客源', '国内其他地区客源', '国外客源']
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
          name: '广州市客源',
          type: 'bar',
          barWidth: 20,
          barGap: '30%',
          itemStyle: {
            color: '#974DFF'
          },
          data: [14, 22, 25, 31, 28, 21]
        },
        {
          name: '华南其他地区客源',
          type: 'bar',
          barWidth: 20,
          barGap: '30%',
          itemStyle: {
            color: '#5F45FF'
          },
          data: [24, 32, 35, 41, 38, 31]
        },
        {
          name: '国内其他地区客源',
          type: 'bar',
          barWidth: 20,
          barGap: '30%',
          itemStyle: {
            color: '#02CDFF'
          },
          data: [19, 27, 30, 36, 33, 26]
        },
        {
          name: '国外客源',
          type: 'bar',
          barWidth: 20,
          barGap: '30%',
          itemStyle: {
            color: '#0090FF'
          },
          data: [14, 21, 33, 32, 31, 22]
        }
      ]
    }
  }

  render () {
    const lineList = Array.from(Array(50), (v,k) =>k)
    return (
      <div className='bottom-center-wrap'>
        <Border width={1644} height={458} lineList={lineList} title={'月到访客源组成波动'} unit={'(近6个月)'} size={20}></Border>
        <ReactEcharts className='chart-ele'
          option={this.barChartOption()}
          style={{height: '100%', width: '100%'}}
        />
      </div>
    )
  }
}