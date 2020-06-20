/* 租金总租金，月租金单价走势 */

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
        name: '单位:元/平米',
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
          type: 'bar',
          barWidth: '36%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#9A3BF3'},
                {offset: 0.5, color: '#6765FF'},
                {offset: 1, color: '#258AFF'}
              ]
            )
          },
          data: [14, 22, 25, 31, 28, 21]
        }
      ]
    }
  }

  render () {

    const lineList = Array.from(Array(20), (v,k) =>k)
    return (
      <div className='innovate-left-top-wrap'>
        <Border width={460} height={644} lineList={lineList} title={'2020年6月综合数据概览'} unit={''} size={14}></Border>
        <div className='top-rent-box'>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-pig.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>100,780,000 <span>元</span> </h3>
              <h4>当月营业收入总金额</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-trading-num.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>3,564 <span>笔</span> </h3>
              <h4>当月交易笔数</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-opening-num.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>269 <span>家</span> </h3>
              <h4>当月营业商户数</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-net-store.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>258 <span>家</span> </h3>
              <h4>当月营业网店数</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}