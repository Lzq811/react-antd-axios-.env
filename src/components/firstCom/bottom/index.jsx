import React, {Component} from 'react'

import Border from '../../border'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import './index.less'

export default class Bottom extends Component {

  growthOption = () => {
    return {
      angleAxis: {
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        min: 0,
        max: 100,
        boundaryGap: ['0', '100'],
        startAngle: 180
      },
      radiusAxis: {
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        data: ['a', 'b', 'c'],
        z: 10
      },
      polar: {
        radius: '70%'
      },
      series: [
        {
          type: 'bar',
          data: [, , 40],
          coordinateSystem: 'polar',
          barMaxWidth: 20,
          z: 2,
          name: '抢修项目',
          roundCap: true,
          color: '#1779ee',
          barGap: '-100%',
        },
        {
          type: 'bar',
          data: [, , 60],
          z: 1,
          coordinateSystem: 'polar',
          barMaxWidth: 20,
          name: '警告事件',
          roundCap: true,
          color: '#29e2b0',
          barGap: '-100%',
        },
        {
          type: 'bar',
          data: [, , 70],
          z: 0,
          silent: true,
          coordinateSystem: 'polar',
          barMaxWidth: 20,
          name: 'C',
          roundCap: true,
          color: '#F1F3F8',
          barGap: '-100%',
        },
        {
          type: 'gauge',
          radius: '60%',
          max: 100,
          detail: {
            show: false,
            offsetCenter: [0, '90%'],
            fontSize: 48,
            color: '#333'
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 0,
            }
          },
          splitLine: {
            show: true,
            length: 15,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            show: true,
            color: '#333',
            fontSize: 18
          },
          pointer: {
            show: false,
            itemStyle: {
              color: '#333'
            }
          }
        }
      ],
      legend: {
        show: true,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
          fontSize: 16,
          color: '#c0c0c0'
        },
        bottom: 30,
        left: 'center',
        data: ['抢修项目', '警告事件']
      },
      tooltip: {
        show: false
      }
    }
  }
  operateOption = () => {}
  innovateOption = () => {}
  passengerOption = () => {}
  radiationOption = () => {}

  render () {
    const lineList = Array.from(Array(10), (v,k) =>k)
    return (
      <div className='first-bottom-wrap'>
        <div className='list-item'>
          <Border width={300} height={300} lineList={lineList} title={'成长指数'} unit={''} size={16}></Border>
          <ReactEcharts className='chart-ele'
            option={this.growthOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='list-item'>
          <Border width={300} height={300} lineList={lineList} title={'经营指数'} unit={''} size={16}></Border>
        </div>
        <div className='list-item'>
          <Border width={300} height={300} lineList={lineList} title={'创新指数'} unit={''} size={16}></Border>
        </div>
        <div className='list-item'>
          <Border width={300} height={300} lineList={lineList} title={'客流指数'} unit={''} size={16}></Border>
        </div>
        <div className='list-item'>
          <Border width={300} height={300} lineList={lineList} title={'辐射指数'} unit={''} size={16}></Border>
        </div>
      </div>
    )
  }
}