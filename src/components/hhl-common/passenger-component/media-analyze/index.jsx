/* 媒体分析 */

import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import './index.less'

export default class MediaAnalyze extends Component {

  state = {

  }

  phoneBrandBar = () => {
    return {
      tooltip: {},
      grid: {
        left: '4%',
        right: '4%',
        top: '4%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          interval: 0,
          rotate: -45,
          fontSize: 14
        },
        data: ['iphone', 'vivo', 'OPPO', '华为', '小米', '三星', '诺基亚', 'SONY', 'HTC', '金立']
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: val => val + '%'
        }
      },
      series: [
        {
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#2BE6FD'},
                {offset: 0.5, color: '#17B2ED'},
                {offset: 1, color: '#0076DA'}
              ]
            )
          },
          data: [27, 21, 18, 10, 8, 6, 5, 3, 2, 1]
        }
      ]
    }
  }

  APPTypeBar = () => {
    return {
      tooltip: {},
      grid: {
        left: '4%',
        right: '4%',
        top: '4%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          interval: 0,
          rotate: -45,
          fontSize: 14
        },
        data: ['微信', 'QQ', '淘宝', '京东', '微博', '天猫', '支付宝', '唯品会', '爱奇艺', '优酷']
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: val => val + '%'
        }
      },
      series: [
        {
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#2BE6FD'},
                {offset: 0.5, color: '#17B2ED'},
                {offset: 1, color: '#0076DA'}
              ]
            )
          },
          data: [27, 21, 18, 10, 8, 6, 5, 3, 2, 1]
        }
      ]
    }
  }

  APPTimePie = () => {
    return {
      color: ['#A264FF', '#F16E4B', '#D651EF', '#4C6DFE', '#009CEA'],
      title: {
        show: true,
        textStyle: {color: '#008FEE', fontSize: 18},
        bottom: '12%',
        left: 'center',
        text: '喜欢使用APP的时间段'
      },
      legend: {
        orient: 'horizontal',
        bottom: 0,
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 20,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        data: ['09-12', '12-15', '15-18', '18-21', '21-24']
      },
      series: [
        {
          name: '',
          type: 'pie',
          center: ['50%', '42%'],
          radius: ['52%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'outside',
            color: '#fff',
            fontSize: 14,
            formatter: '{d}%'
          },
          
          labelLine: {
            show: true,
            // length: 8,
            // length2: 6,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 50, name: '09-12'},
            {value: 20, name: '12-15'},
            {value: 15, name: '15-18'},
            {value: 10, name: '18-21'},
            {value: 5, name: '21-24'}
          ]
        }
      ]
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className='media-analyze-wrap'>
        <h3 className='title'> <span className='icon'></span> 媒体分析</h3>
        <h4 className='sub-title'>手机品牌poi偏好TOP10</h4>
        <div className='phone-brand-bar'>
          <ReactEcharts
            option={this.phoneBrandBar()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <h4 className='sub-title' style={{marginTop: '6px'}}>APP类型偏好TOP10</h4>
        <div className='app-type-bar'>
          <ReactEcharts
            option={this.APPTypeBar()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='app-time-pie'>
          <ReactEcharts
            option={this.APPTimePie()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
      </div>
    )
  }
}