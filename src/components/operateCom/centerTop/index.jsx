import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import Border from '../../border'

import './index.less'

export default class Rent extends Component {


  lineChartOption = () => {
    return {
      // tooltip: {},
      legend: {show: false},
      radar: {
        shape: 'polygon',
        center: ['50%', '44%'],
        radius: '48%',
        splitNumber: 5,
        splitLine: {
          lineStyle: {
            color: [
              'rgba(48, 171, 214, 0.1)', 'rgba(48, 171, 214, 0.2)',
              'rgba(48, 171, 214, 0.4)', 'rgba(48, 171, 214, 0.6)',
              'rgba(48, 171, 214, 0.8)', 'rgba(48, 171, 214, 1)'
            ]
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(48, 171, 214, 1)'
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 18
          }
        },
        name: {
          textStyle: {
            color: '#3ED4FF',
            fontSize: 18
          }
        },
        indicator: [
          { name: '平均客单价变动指数', max: 100},
          { name: '经营者信心指数', max: 100},
          { name: '从业人员变动指数', max: 100},
          { name: '平均综合成本指数', max: 100}
        ]
      },
      series: [{
        name: '2020年6月步行街经营指数：80%',
        type: 'radar',
        areaStyle: {opacity: 0.5},
        itemStyle: {
          color: 'rgb(0,204,255)'
        },
        data: [
          {
            value: [82, 88, 75, 86]
          }
        ]
      }]
    }
  }

  render () {
    const lineList = Array.from(Array(40), (v,k) =>k)
    return (
      <div className='growth-num-wrap'>
        <Border width={666} height={644} title={'2020年6月步行街经营指数：80%'} unit={''} lineList={lineList} size={16}></Border>
        <ReactEcharts className='chart-ele'
          option={this.lineChartOption()}
          style={{height: '100%', width: '100%'}}
        />
        <div className='num-table-box'>
          <div className='table-item'>平均客单价变动指数</div>
          <div className='table-item'>经营者信心指数</div>
          <div className='table-item'>从业人员变动指数</div>
          <div className='table-item'>平均综合成本指数</div>
          <div className='table-item table-item-value'>82%</div>
          <div className='table-item table-item-value'>88%</div>
          <div className='table-item table-item-value'>75%</div>
          <div className='table-item table-item-value'>86%</div>
        </div>
      </div>
    )
  }
}