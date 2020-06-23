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
          if (arr && arr.length > 0) {
            return `
              <div style='width: 80px;height: 50px; font-size: 12px;'>
                ${arr[arr.length - 1].axisValue}客流指数 <br />
                <div style='font-size: 20px; color: #00CBFE; margin-top: 6px;'>${arr[arr.length - 1].data}%</div>
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
          }
        },
      },
      series: [
        {
          type: 'line',
          itemStyle: {
            color: '#20D5FE',
            borderColor: '#20D5FE',
            borderWidth: 1
          },
          areaStyle: {
            show: true,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(10,233,254,1)'},
                {offset: 0.5, color: 'rgba(10,233,254,0.6)'},
                {offset: 1, color: 'rgba(10,233,254,0)'}
              ]
            )
          },
          symbolSize: 8,
          symbol: 'emptyCircle',
          lineStyle: {
            width: 2,
            color: '#00CCFF'
          },
          emphasis: {
            itemStyle: {
              borderWidth: 6,
              borderColor: '#20D5FE',
              shadowColor: '#20D5FE',
              shadowBlur: 20
            }
          },
          data: [13, 17, 18, 19, 21, 25]
        }
      ]
    }
  }

  onChartReady = (opt) => {
    this.autoTopToggleTip(opt)
  }

  autoTopToggleTip = (mychart) => {
    let index = 0, maxIndex = 6
    this.timer = setInterval(()=>{
      mychart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index > maxIndex ? index = 0 : index
      })
      index++
    },3000);
    mychart.on('mouseover', ()=>{
        clearInterval(this.timer)
    })
    mychart.on('mouseout', ()=>{
      clearInterval(this.timer)
      this.timer = setInterval(()=>{
        mychart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index > maxIndex ? index = 0 : index
        })
        index++
      },3000)
    })
  }

  bottomChartOption = () => {
    return {
      color: ['#FF54BD', '#9962FF', '#2165FF', '#00CCFF'],
      title: {show: false},
      tooltip: {
        trigger: 'axis',
        triggerOn: 'mousemove',
        textStyle: {
          fontSize: 14
        },
        axisPointer: {
          type: 'line'
        }
      },
      grid: {
        top: 100,
        bottom: 40,
        right: 16,
        left: 40,
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
          name: '总客流指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [14, 22, 25, 31, 28, 21]
        },
        {
          name: '女性客流指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [22, 30, 33, 39, 36, 29]
        },
        {
          name: '中青年客流指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [10, 15, 15, 12, 17, 19]
        },
        {
          name: '中高收入客流指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [4, 8, 9, 11, 13, 15]
        },
        {
          name: '夜间到访客流指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [14, 8, 12, 19, 17, 11]
        }
      ]
    }
  }
  onBottomChartReady = (opt) => {
    this.autoBottomToggleTip(opt)
  }

  autoBottomToggleTip = (mychart) => {
    let index = 0, maxIndex = 6
    this.timer = setInterval(()=>{
      mychart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index > maxIndex ? index = 0 : index
      })
      index++
    },3000);
    mychart.on('mouseover', ()=>{
        clearInterval(this.timer)
    })
    mychart.on('mouseout', ()=>{
      clearInterval(this.timer)
      this.timer = setInterval(()=>{
        mychart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index > maxIndex ? index = 0 : index
        })
        index++
      },3000)
    })
  }

  componentDidMount () {
    
  }

  render () {
    const lineList = Array.from(Array(20), (v,k) =>k)
    return (
      <div className='rigth-top-wrap'>
        <div className='top-chart-box'>
          <Border width={460} height={310} lineList={lineList} title={'步行街客流指数走势'} unit={'(近6个月)'} size={12}></Border>
          <ReactEcharts className='chart-ele'
            option={this.lineChartOption()}
            onChartReady={this.onChartReady}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='bottom-chart-box'>
          <Border width={460} height={310} lineList={lineList} title={'步行街客流指数走势'} unit={'(近6个月)'} size={12}></Border>
          <ReactEcharts className='chart-ele'
            option={this.bottomChartOption()}
            onChartReady={this.onBottomChartReady}
            style={{height: '100%', width: '100%'}}
          />
        </div>
      </div>
    )
  }
}