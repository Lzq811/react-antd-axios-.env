import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import Border from '../../border'

import './index.less'

export default class Rent extends Component {

  sexChartOption = () => {
    return {
      title: {show: false},
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
        data: ['男', '女']
      },
      grid: {
        top: '24%',
        bottom: '14%',
        right: '8%',
        left: '10%',
        containLabel: true
      },
      yAxis: {
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
      xAxis: {
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
          show: false,
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
      },
      series: [
        {
          name: '男',
          type: 'bar',
          barWidth: '36%',
          stack: '总量',
          itemStyle: {
            color: '#00C5FE'
          },
          label: {
            show: true,
            position: 'inside',
            color: '#fff',
            fontSize: 14,
            offset: [0, 2],
            formatter: '{c}%'
          },
          data: [49, 47, 51, 53, 45, 47]
        },
        {
          name: '女',
          type: 'bar',
          stack: '总量',
          barWidth: '36%',
          itemStyle: {
            color: '#EF34A8'
          },
          label: {
            show: true,
            position: 'inside',
            color: '#fff',
            fontSize: 14,
            offset: [0, 2],
            formatter: '{c}%'
          },
          data: [51, 53, 49, 47, 55, 53]
        }
      ]
    }
  }

  ageChartOption = () => {
    return {
      title: {show: false},
      grid: {
        top: '24%',
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
        itemGap: 30,
        bottom: '6%',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 18
        },
        data: ['19岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上']
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
          name: '19岁以下',
          type: 'bar',
          barWidth: 10,
          barGap: '30%',
          itemStyle: {
            color: '#974DFF'
          },
          data: [14, 22, 25, 31, 28, 21]
        },
        {
          name: '20-29岁',
          type: 'bar',
          barWidth: 10,
          barGap: '30%',
          itemStyle: {
            color: '#5F45FF'
          },
          data: [24, 32, 35, 41, 38, 31]
        },
        {
          name: '30-39岁',
          type: 'bar',
          barWidth: 10,
          barGap: '30%',
          itemStyle: {
            color: '#02CDFF'
          },
          data: [19, 27, 30, 36, 33, 26]
        },
        {
          name: '40-49岁',
          type: 'bar',
          barWidth: 10,
          barGap: '30%',
          itemStyle: {
            color: '#0090FF'
          },
          data: [14, 21, 33, 32, 31, 22]
        },
        {
          name: '50岁以上',
          type: 'bar',
          barWidth: 10,
          barGap: '30%',
          itemStyle: {
            color: '#314976'
          },
          data: [7, 12, 19, 21, 11, 9]
        }
      ]
    }
  }

  render () {
    const lineList = Array.from(Array(50), (v,k) =>k)
    return (
      <div className='bottom-center-wrap'>
        <Border width={1154} height={458} lineList={lineList} title={'客群画像'} unit={'(近6个月)'} size={20}></Border>
        <ReactEcharts className='chart-ele'
          option={this.sexChartOption()}
          style={{height: '100%', width: '32%', left: '0%'}}
        />
        <ReactEcharts className='chart-ele'
          option={this.ageChartOption()}
          style={{height: '100%', width: '68%', left: '32%'}}
        />
      </div>
    )
  }
}