import React, {Component} from 'react'

import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import 'echarts/map/js/china'

import './index.less'

export default class Rent extends Component {

  mapOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100'
      },
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      visualMap: { //图例值控制
        min: 0,
        max: 1,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'china',
        zoom: 1.2,
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true, //是否允许缩放
        itemStyle: {
          normal: {
            color: 'rgba(0,44,105, 0.8)', //地图背景色
            borderColor: '#516a89', //省市边界线00fcff 516a89
            borderWidth: 1
          },
          emphasis: {
            color: 'rgba(5,111,162, 0.8)' //悬浮背景
          }
        }
      },
      series: [
        {
          type: "lines",
          zlevel: 2,
          effect: {
            show: true,
            period: 4,
            trailLength: 0.02,
            symbol: "arrow",
            symbolSize: 5,
          },
          lineStyle: { normal: { width: 1, opacity: 1, curveness: 0.3 } },
          data: [
            [{ coord: [127.9688, 45.368], value: 0.88 },{ coord: [113.269099, 23.121085] }],
            [{ coord: [110.3467, 41.4899], value: 0.12 },{ coord: [113.269099, 23.121085] }],
            [{ coord: [116.4551, 40.2539], value: 0.83 },{ coord: [113.269099, 23.121085] }],
            [{ coord: [102.9199, 25.4663], value: 0.11 },{ coord: [113.269099, 23.121085] }],
            [{ coord: [103.9526, 30.7617], value: 1 },{ coord: [113.269099, 23.121085] }],
            [{ coord: [117.29, 32.0581], value: 0.73 },{ coord: [113.269099, 23.121085] }],
            [{ coord: [113.0823, 28.2568], value: 0.75 },{ coord: [113.269099, 23.121085] }],
            [{ coord: [113.12244, 23.009505], value: 0.78 },{ coord: [113.269099, 23.121085]}],
            [{ coord: [121.4648, 31.2891], value: 0.91 },{ coord: [113.269099, 23.121085] }]
          ],
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: { period: 4, brushType: "stroke", scale: 4 },
          label: {
            normal: { show: true, position: "right", offset: [5, 0], fontSize: 13 },
            emphasis: { show: true },
          },
          symbol: "circle",
          itemStyle: { normal: { show: false, color: "#f00" } },
          data: [
            { name: "黑龙江", value: [127.9688, 45.368, 0.88] },
            { name: "内蒙古", value: [110.3467, 41.4899, 0.12] },
            { name: "北京", value: [116.4551, 40.2539, 0.83] },
            { name: "云南", value: [102.9199, 25.4663, 0.11] },
            { name: "四川", value: [103.9526, 30.7617, 1] },
            { name: "安徽", value: [117.29, 32.0581, 0.73] },
            { name: "湖南", value: [113.0823, 28.2568, 0.75] },
            { name: "广东", value: [113.12244, 23.009505, 0.78] },
            { name: "上海", value: [121.4648, 31.2891, 0.91] },
          ],
        },
        {
          type: "scatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: { period: 4, brushType: "stroke", scale: 4 },
          label: {
            normal: {
              show: true,
              position: "right",
              color: "#0f0",
              formatter: "{b}",
              textStyle: { color: "#0f0" },
            },
            emphasis: { show: true, color: "#f60" },
          },
          symbol: "pin",
          symbolSize: 50,
          data: [{ name: "北京路", value: [113.269099, 23.121085, 10] }],
        },
      ]
  }
  }

  componentDidMount () {
    
  }

  render () {
    const lineList = Array.from(Array(40), (v,k) =>k)
    return (
      <div className='growth-num-wrap'>
        <ReactEcharts className='chart-ele'
          option={this.mapOption()}
          style={{height: '644px', width: '666px', boxShadow: '0px 5px 35px 0px rgba(0, 204, 255, 0.91)'}}
        />
      </div>
    )
  }
}