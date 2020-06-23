import React, {Component} from 'react'

import 'echarts'
import ReactEcharts from 'echarts-for-react'
import 'echarts-liquidfill'

import './index.less'

export default class TopCenter extends Component {

  liquidFillOption = () => {
    return {
      title: {
        show: true,
        text: '商圈发展指数',
        bottom: 56,
        left: 'center',
        textStyle: {color: '#fff', fontSize: 16}
      },
      series: [
        {
          type: 'liquidFill',
          radius: '180',
          phase: 0,
          period: function (value, index) {
            return 2000 * index + 1700
          },
          center : ['50%', "59%"],
          waveLength: '90%',
          amplitude: '5%',
          outline: {
            show: false
          },
          backgroundStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          data: [
            {
              value: 0.865,
              name:'',
              itemStyle: {
                color: 'rgb(82,212,255)',
                opacity: 0.9
              }
            },
            {
              value: 0.8,
              direction: 'left',
            }
          ],
          label: {
            formatter: (data) => {
              // eslint-disable-next-line
              return '{a|' + String(data.data.value * 100).substring(0, 2) + '}' + '{b|' + String(data.data.value * 100).substring(2, 5)+'%}\n' + data.data.name
            },
            padding: [60, 0, 0, 0],
            rich:{
              a:{
                color:'rgb(255,255,255)',
                fontSize: 60,
                fontFamily:'serif'
              },
              b:{
                color:'rgb(255,255,255)',
                fontSize: 26,
                padding: [0, 0, 26, 0]
              }
            }
          }
        }
      ]
    }
  }

  render () {

    return (
      <div className='first-top-wrap'>
        <div className='center-liquid-box'>
          <ReactEcharts
            option={this.liquidFillOption()}
            style={{height: '100%', width: '100%'}}
          />
          <div className='light-box'></div>
          <div className='list-item current'>
            <div className='icon-box'>
              <img width='50' height='50' src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/passenger-current.png' alt='' />
            </div>
            <div className='right-content'>
              <h3>350,000 <span>人</span></h3>
              <h4>北京路当日总客流</h4>
            </div>
          </div>
          <div className='list-item total'>
            <div className='icon-box'>
              <img width='50' height='50' src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/passenger-total.png' alt='' />
            </div>
            <div className='right-content'>
              <h3>7,780,000 <span>人</span></h3>
              <h4>北京路当月累计客流</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}