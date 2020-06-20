/* 租金总租金，月租金单价走势 */

import React, {Component} from 'react'

import echarts from 'echarts'

import Border from '../../border'

import './index.less'

export default class Rent extends Component {

  lineChartOption = () => {
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
        },
        // formatter: (arr) => {
        //   if (arr && arr.length > 0) {
        //     const year = new Date().getFullYear()
        //     const icon = '<span style="display:inline-block;width:10px;height: 10px"></span>'
        //     let str = year + '年' + arr[0].axisValue + '<br />'
        //     arr.forEach(item => {
        //       str += item.seriesName + ': ' + item.data + '% <br />'
        //     })
        //     return str
        //   }
        // }
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
          name: '线上线下融合指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [14, 22, 25, 31, 28, 21]
        },
        {
          name: '体验业态业种指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [22, 30, 33, 39, 36, 29]
        },
        {
          name: '文化业态业种指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [10, 15, 15, 12, 17, 19]
        },
        {
          name: '服务业态业种指数',
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [4, 8, 9, 11, 13, 15]
        }
      ]
    }
  }

  initLineChart = () => {
    let mychart = echarts.init(document.getElementById('growth-about-trend-chart'))
    mychart.setOption(this.lineChartOption(), true)
    this.autoToggleTip(mychart)
  }

  autoToggleTip = (mychart) => {
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
    this.initLineChart()
  }

  render () {
    const lineList = Array.from(Array(20), (v,k) =>k)
    return (
      <div className='rigth-top-wrap'>
        <Border width={460} height={644} lineList={lineList} title={'创新相关指数走势'} unit={'(近6个月)'} size={14}></Border>
        <div id='growth-about-trend-chart' className='chart-ele' style={{height: '600px', width: '460px'}}></div>
      </div>
    )
  }
}