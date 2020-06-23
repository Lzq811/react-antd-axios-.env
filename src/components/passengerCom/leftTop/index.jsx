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
        top: '24%',
        bottom: '10%',
        right: '10%',
        left: '8%',
        containLabel: true
      },
      legend: {
        show: false
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: ['北京路', '正佳广场', '天河城百货', '上下九步行街', '花城汇广场', '广州K11'].reverse()
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
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          formatter: '{value}%'
        },
      },
      series: [
        {
          type: 'bar',
          barWidth: 12,
          itemStyle: {
            barBorderRadius: 6,
            color: '#EF34A8'
          },
          data: [31, 28, 25, 20, 16, 12].reverse()
        }
      ]
    }
  }

  lineChartOption = () => {
    return {
      title: {show: false},
      grid: {
        top: 120,
        bottom: 40,
        right: 20,
        left: 30,
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
            fontSize: 16
          },
          interval: 0
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: ['6月1日', '6月10日', '6月20日', '6月30日']
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
          }
        },
      },
      series: [
        {
          type: 'line',
          itemStyle: {
            color: '#AF60FC',
            borderColor: '#AF60FC',
            borderWidth: 1
          },
          areaStyle: {
            show: true,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(163,95,247,1)'},
                {offset: 0.5, color: 'rgba(163,95,247,0.6)'},
                {offset: 1, color: 'rgba(163,95,247,0)'}
              ]
            )
          },
          symbolSize: 8,
          symbol: 'emptyCircle',
          showSymbol: false,
          smooth: true,
          lineStyle: {
            width: 2,
            color: '#AF60FC'
          },
          data: [13, 32, 18, 40]
        }
      ]
    }
  }

  componentDidMount () {
    
  }

  render () {
    const lineList = Array.from(Array(20), (v,k) =>k)
    return (
      <div className='rigth-top-wrap'>
        <div className='top-chart-box'>
          <Border width={460} height={310} lineList={lineList} title={'到访客流来源分布'} unit={'(近30天)'} size={12}></Border>
          <ReactEcharts className='chart-ele'
            option={this.barChartOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='bottom-chart-box'>
          <Border width={460} height={310} lineList={lineList} title={'日到访客流走势'} unit={'(近30天)'} size={12}></Border>
          <ReactEcharts className='chart-ele'
            option={this.lineChartOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
      </div>
    )
  }
}