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
        name: '客流量',
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
            color: 'rgb(234,53,169)'
          },
          areaStyle: {
            show: true,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(234,53,169,1)'},
                {offset: 0.5, color: 'rgba(234,53,169,0.4)'},
                {offset: 1, color: 'rgba(234,53,169,0)'}
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
      <div className='rent-about-wrap'>
        <div className='top-rent-box'>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-peoples.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>780,000 <span>人</span> </h3>
              <h4>当日累计到访客流</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-passenger.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>7,780,000 <span>人</span> </h3>
              <h4>当月累计到访客流</h4>
            </div>
          </div>
        </div>
        <div className='rent-chart-box'>
          <Border width={460} height={429} lineList={lineList} title={'月到访客流走势'} unit={'(近6个月)'} size={16}></Border>
          <ReactEcharts className='chart-ele'
            option={this.lineChartOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
      </div>
    )
  }
}