/* 经营数据大屏的树结构 */

import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import 'echarts-liquidfill'

import './index.less'

export default class Tree extends Component {

  state = {
    
  }

  liquidFillOption = () => {
    return {
      series: [
        {
          type: 'liquidFill',
          radius: '300',
          phase: 0,
          period: function (value, index) {
            return 2000 * index + 1700
          },
          center : ['50%', "50%"],
          waveLength: '90%',
          amplitude: '5%',
          outline: {
            show: false
          },
          backgroundStyle: {
            color: 'rgba(255, 255, 255, 0)'
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
            formatter: function (data) {
              return  '{a|'+String(data.data.value * 100).substring(0, 2)+'}'+'{b|'+String(data.data.value * 100).substring(2, 5)+'%}\n' + data.data.name
            },
            padding: [60, 0, 0, 0],
            rich:{
              a:{
                color:'rgb(255,255,255)',
                fontSize: 120,
                fontFamily:'serif'
              },
              b:{
                color:'rgb(255,255,255)',
                fontSize: 46,
                padding: [0, 0, 50, 0]
              }
            }
          }
        }
      ]
    }
  }

  treeOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: (obj)=>{
          return obj.name
        }
      },
      series: {
        type: 'tree',
        data: [{
          children: [
            {
              name: '1F',
              children: [
                { name: '果嫁冻凉' }, { name: '贡茶' }, { name: '满记' }, { name: '瑞可爷爷' }, { name: '魔之咖喱' }
              ],
              label: {
                show: false,
                formatter: [
                  `{a|交易额：}{b|${382280}}`,
                  `{a|比例：}{b|${11}%}`
                ].join('\n'),
                position: [-50, -100],
                padding: 15,
                borderColor: '#01CAFD',
                backgroundColor: '#06072C',
                borderWidth: 1,
                width: 100,
                height: 60,
                borderRadius: 5,
                rich: {
                  a: {
                    color: '#ffffff',
                    lineHeight: 32
                  },
                  b: {
                    color: '#01CAFD',
                    lineHeight: 32
                  }
                },
                align: 'left'
              },
              symbol: 'image://https://big-screen.oss-cn-shenzhen.aliyuncs.com/zhengjia/screen/1F.png',
              symbolSize: 32
            },
            {
              name: '2F',
              children: [
                { name: '马克华菲' }, { name: 'DEBRAND' }, { name: 'WAKEUP' }, { name: 'SWAROVSKI' }, { name: 'CASSILE' }
                ],
              label: {
                show: false,
                formatter: [
                  `{a|交易额：}{b|${382280}}`,
                  `{a|比例：}{b|${11}%}`
                ].join('\n'),
                position: [-50, -100],
                padding: 15,
                borderColor: '#01CAFD',
                backgroundColor: '#06072C',
                borderWidth: 1,
                width: 100,
                height: 60,
                borderRadius: 5,
                rich: {
                  a: {
                    color: '#ffffff',
                    lineHeight: 32
                  },
                  b: {
                    color: '#01CAFD',
                    lineHeight: 32
                  }
                },
                align: 'left'
              },
              symbol: 'image://https://big-screen.oss-cn-shenzhen.aliyuncs.com/zhengjia/screen/2F.png',
              symbolSize: 32
            },
            {
              name: '3F',
              children: [
                { name: '卡宾' }, { name: 'S.DEER' }, { name: 'VERO MODA' }, { name: '谭木匠' }, { name: 'LOVE&LOVE' }
                ],
              label: {
                show: false,
                formatter: [
                  `{a|交易额：}{b|${382280}}`,
                  `{a|比例：}{b|${11}%}`
                ].join('\n'),
                position: [-50, -100],
                padding: 15,
                borderColor: '#01CAFD',
                backgroundColor: '#06072C',
                borderWidth: 1,
                width: 100,
                height: 60,
                borderRadius: 5,
                rich: {
                  a: {
                    color: '#ffffff',
                    lineHeight: 32
                  },
                  b: {
                    color: '#01CAFD',
                    lineHeight: 32
                  }
                },
                align: 'left'
              },
              symbol: 'image://https://big-screen.oss-cn-shenzhen.aliyuncs.com/zhengjia/screen/3F.png',
              symbolSize: 32
            },
            {
              name: '4F',
              children: [
                { name: '苹果数码' }, { name: '香港避风塘炒蟹（辣蟹皇）' }, { name: '鹤一拉面' }, { name: '安踏' }, { name: '华为' }
                ],
              label: {
                show: false,
                formatter: [
                  `{a|交易额：}{b|${382280}}`,
                  `{a|比例：}{b|${11}%}`
                ].join('\n'),
                position: [-50, -100],
                padding: 15,
                borderColor: '#01CAFD',
                backgroundColor: '#06072C',
                borderWidth: 1,
                width: 100,
                height: 60,
                borderRadius: 5,
                rich: {
                  a: {
                    color: '#ffffff',
                    lineHeight: 32
                  },
                  b: {
                    color: '#01CAFD',
                    lineHeight: 32
                  }
                },
                align: 'left'
              },
              symbol: 'image://https://big-screen.oss-cn-shenzhen.aliyuncs.com/zhengjia/screen/4F.png',
              symbolSize: 32
            },
            {
              name: '5F',
              children: [
                { name: 'KM/KILOV METERS' }, { name: 'ADIDAS ORIGINALS' }, { name: 'CONVERSE' }, { name: 'VANS' }, { name: 'NEWBALANCE' }
                ],
              label: {
                show: false,
                formatter: [
                  `{a|交易额：}{b|${382280}}`,
                  `{a|比例：}{b|${11}%}`
                ].join('\n'),
                position: [-50, -100],
                padding: 15,
                borderColor: '#01CAFD',
                backgroundColor: '#06072C',
                borderWidth: 1,
                width: 100,
                height: 60,
                borderRadius: 5,
                rich: {
                  a: {
                    color: '#ffffff',
                    lineHeight: 32
                  },
                  b: {
                    color: '#01CAFD',
                    lineHeight: 32
                  }
                },
                align: 'left'
              },
              symbol: 'image://https://big-screen.oss-cn-shenzhen.aliyuncs.com/zhengjia/screen/5F.png',
              symbolSize: 32
            },
            {
              name: '6F',
              children: [
                { name: '皮卡泡泡' }, { name: '玩具反斗城' }, { name: 'ADIDAS KIDS' }, { name: '蔓莲净肤' }, { name: '面点王' }
                ],
              label: {
                show: false,
                formatter: [
                  `{a|交易额：}{b|${382280}}`,
                  `{a|比例：}{b|${11}%}`
                ].join('\n'),
                position: [-50, -100],
                padding: 15,
                borderColor: '#01CAFD',
                backgroundColor: '#06072C',
                borderWidth: 1,
                width: 100,
                height: 60,
                borderRadius: 5,
                rich: {
                  a: {
                    color: '#ffffff',
                    lineHeight: 32
                  },
                  b: {
                    color: '#01CAFD',
                    lineHeight: 32
                  }
                },
                align: 'left'
              },
              symbol: 'image://https://big-screen.oss-cn-shenzhen.aliyuncs.com/zhengjia/screen/6F.png',
              symbolSize: 32
            },
            {
              name: '7F',
              children: [
                { name: '西堤厚牛排' }, { name: '云海肴' }, { name: '吃饭皇帝大' }, { name: '西贝' }, { name: '汇美舍' }
                ],
              label: {
                show: false,
                formatter: [
                  `{a|交易额：}{b|${382280}}`,
                  `{a|比例：}{b|${11}%}`
                ].join('\n'),
                position: [-100, -100],
                padding: 15,
                borderColor: '#01CAFD',
                backgroundColor: '#06072C',
                borderWidth: 1,
                width: 100,
                height: 60,
                borderRadius: 5,
                rich: {
                  a: {
                    color: '#ffffff',
                    lineHeight: 32
                  },
                  b: {
                    color: '#01CAFD',
                    lineHeight: 32
                  }
                },
                align: 'left'
              },
              symbol: 'image://https://big-screen.oss-cn-shenzhen.aliyuncs.com/zhengjia/screen/7F.png',
              symbolSize: 32
            }
          ]
        }],
        left: '0%',
        right: '0%',
        top: '260px',
        bottom: '220px',
        orient: 'vertical',
        lineStyle: { color: '#3485ff' },
        label: {
          formatter (val) {
            if (val.name) {
              let str = ''
              let name = ''
              if(val.name.length > 12){
                name = val.name.substr(0, 11)+'...'
              }else{
                name = val.name
              }
              for (let i = 0; i < name.length; i++) {
                const element = name.split('')[i];
                str += element + '\n'
              }
              return str
            }
          }
        },
        leaves: {
          label: {
            normal: {
              position: [5, 15],
              top: 200,
              verticalAlign: 'top',
              align: 'center',
              color: '#ffffff',
              fontSize: 10,
            }
          }
        },
        animation: false
      }
    }
  }

  autoToggleToop = () => {
    clearInterval(this.timer)
    let option = this.treeOption()
    let index = 0
    option.series.data[0].children.forEach(item => {
      item.label.show = false
    })
    option.series.data[0].children[index].label.show = true
    this.initChart(option)
    this.timer = setInterval(() => {
      option.series.data[0].children.forEach(res => {
        res.label.show = false
      })
      option.series.data[0].children[index].label.show = true
      this.initChart(option)
      if (index === option.series.data[0].children.length - 1) {
        index = -1
      }
      index++
    },4000)
  }

  initChart = (option) => {
    let mychart = echarts.init(document.getElementById('tree-chart'))
    mychart.setOption(option, true)
  }

  componentDidMount () {
    const option = this.treeOption()
    this.initChart(option)
    this.autoToggleToop()
  }

  render () {

    return (
      <div className='tree-wrap'>
        <div className='liquild-ball'>
          <ReactEcharts
          option={this.liquidFillOption()}
          style={{height: '100%', width: '100%'}}
        />
        </div>
        <div id='tree-chart' className='tree-chart'></div>
      </div>
    )
  }
}