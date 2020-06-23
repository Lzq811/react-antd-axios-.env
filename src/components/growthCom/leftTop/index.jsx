import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import Border from '../../border'

import './index.less'

export default class Rent extends Component {

  barChartOption = () => {
    const VALUE = [17, 23, 29, 33, 37, 31]
    const CubeLeft = echarts.graphic.extendShape({
      shape: {x: 0, y: 0},
      buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x - 10, shape.y]
        const c1 = [shape.x + 10, shape.y]
        const c2 = [xAxisPoint[0] + 10, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] - 10, xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
        ctx.stroke()
      }
    })

    const CubeRight = echarts.graphic.extendShape({
      shape: {x: 0, y: 0},
      buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x + 11, shape.y]
        const c2 = [xAxisPoint[0] + 11, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 8 + 8, xAxisPoint[1] - 10]
        const c4 = [shape.x + 8 + 8, shape.y - 10]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
        ctx.stroke()
      }
    })

    const CubeTop = echarts.graphic.extendShape({
      shape: {x: 0, y: 0},
      buildPath: function(ctx, shape) {
        const c1 = [shape.x - 10, shape.y - 1]
        const c2 = [shape.x + 10, shape.y - 1]
        const c3 = [shape.x + 15, shape.y - 9]
        const c4 = [shape.x - 5, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
        ctx.stroke()
      }
    })

    echarts.graphic.registerShape('CubeLeft', CubeLeft)
    echarts.graphic.registerShape('CubeRight', CubeRight)
    echarts.graphic.registerShape('CubeTop', CubeTop)
    return  {
      grid: {
        top: '26%',
        left: '4%',
        right: '6%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisLine: {
          show: false
        },
        offset: 0,
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff',
          fontSize: 16
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff',
          fontSize: 16
        },
      },
      series: [
        {
          type: 'custom',
          label: {
            show: false
          },
          renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
              type: 'group',
              children: [
                {
                  type: 'CubeLeft',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(164,66,255,1)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(37,139,255,1)'
                      }
                    ])
                  }
                },
                {
                  type: 'CubeRight',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(164,66,255,1)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(37,139,255,1)'
                      }
                    ])
                  }
                },
                {
                  type: 'CubeTop',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {offset: 0, color: 'rgba(164,66,255,1)'},
                      {offset: 1, color: 'rgba(164,66,255,1)'}
                    ])
                  }
                }
              ]
            }
          },
          data: VALUE
        },
        {
          type: 'bar',
          label: {
            show: false
          },
          itemStyle: {
            color: 'transparent'
          },
          data: VALUE
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
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-rent-money.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>450 <span>元/平米</span> </h3>
              <h4>当月租金</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='left-icon'>
              <img src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-pig.png' alt=''/>
            </div>
            <div className='right-num'>
              <h3>100,780,000 <span>元</span> </h3>
              <h4>当月营业收入总金额</h4>
            </div>
          </div>
        </div>
        <div className='rent-chart-box'>
          <Border width={460} height={429} lineList={lineList} title={'月租金单价走势'} unit={'(近6个月)'} size={16}></Border>
          <ReactEcharts className='chart-ele'
            option={this.barChartOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
      </div>
    )
  }
}