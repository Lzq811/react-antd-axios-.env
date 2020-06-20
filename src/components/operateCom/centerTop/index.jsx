/* 租金总租金，月租金单价走势 */

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
        top: 120,
        bottom: 40,
        right: 20,
        left: 30,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        triggerOn: 'none',
        textStyle: {
          fontSize: 14
        },
        axisPointer: {
          type: 'none'
        },
        formatter: (arr) => {
          console.log(arr)
          if (arr && arr.length > 0) {
            return `
              <div style='width: 160px;height: 80px; font-size: 16px;'>
                ${arr[arr.length - 1].axisValue}创新指数 <br />
                <div style='font-size: 40px; color: #FDA000; margin-top: 16px;'>${arr[arr.length - 1].data}%</div>
              </div>
            `
          }
        }
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
        data: ['2020年1月', '2020年2月', '2020年3月', '2020年4月', '2020年5月', '2020年6月']
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
          smooth: true,
          itemStyle: {
            color: 'rgba(233,153,16,1)',
            borderColor: 'rgba(233,153,16,1)',
            borderWidth: 4
          },
          areaStyle: {
            show: true,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(233,153,16,1)'},
                {offset: 0.5, color: 'rgba(233,153,16,0.6)'},
                {offset: 1, color: 'rgba(233,153,16,0)'}
              ]
            )
          },
          symbolSize: 20,
          symbol: 'emptyCircle',
          lineStyle: {
            width: 6,
            color: '#FDA000'
          },
          emphasis: {
            itemStyle: {
              borderWidth: 10,
              borderColor: '#FDA000',
              shadowColor: '#FDA000',
              shadowBlur: 30
            }
          },
          data: [13, 17, 18, 19, 21, 25]
        }
      ]
    }
  }

  onChartReady = (opt) => {
    opt.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: 5
    })
  }

  render () {
    const lineList = Array.from(Array(40), (v,k) =>k)
    return (
      <div className='growth-num-wrap'>
        <Border width={666} height={644} title={'近6个月步行街创新指数走势'} unit={''} lineList={lineList} size={18}></Border>
        <ReactEcharts className='chart-ele'
          option={this.lineChartOption()}
          onChartReady={this.onChartReady}
          style={{height: '100%', width: '100%'}}
        />
      </div>
    )
  }
}