/* 历史游客画像 */

import React, {Component} from 'react'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import './index.less'

export default class HistoryPicture extends Component {

  state = {

  }

  sexPie = () => {
    return {
      color: ['#169FFF', '#FC386B'],
      title: {
        show: true,
        textStyle: {color: '#fff', fontSize: 24},
        top: '40%',
        left: 'center',
        text: '性 别'
      },
      legend: {
        orient: 'horizontal',
        bottom: 30,
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 26,
        textStyle: {
          fontSize: 16,
          color: '#fff'
        },
        data: ['男：44%', '女：56%']
      },
      series: [
        {
          name: '',
          type: 'pie',
          center: ['50%', '42%'],
          radius: ['52%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'outside',
            color: '#fff',
            fontSize: 14,
            formatter: '{d}%'
          },
          
          labelLine: {
            show: false,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 44, name: '男：44%'},
            {value: 56, name: '女：56%'}
          ]
        }
      ]
    }
  }

  carPie = () => {
    return {
      color: ['#169FFF', '#20BC8B'],
      title: {
        show: true,
        textStyle: {color: '#fff', fontSize: 24},
        top: '38%',
        left: 'center',
        text: '是否有车'
      },
      legend: {
        orient: 'horizontal',
        bottom: 30,
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 26,
        textStyle: {
          fontSize: 16,
          color: '#fff'
        },
        data: ['有车', '无车']
      },
      series: [
        {
          name: '有车',
          type: 'pie',
          startAngle: -90,
          center: ['50%', '42%'],
          radius: ['62%', '66%'],
          avoidLabelOverlap: false,
          label: {show: false},
          labelLine: {
            show: false,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 75, itemStyle: {color: '#169FFF'}},
            {value: 25, itemStyle: {color: 'rgba(0,0,0,0)'}}
          ]
        },
        {
          name: '无车',
          type: 'pie',
          startAngle: -90,
          center: ['50%', '42%'],
          radius: ['46%', '50%'],
          avoidLabelOverlap: false,
          label: {show: false},
          labelLine: {
            show: false,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 25, itemStyle: {color: '#20BC8B'}},
            {value: 75, itemStyle: {color: 'rgba(0,0,0,0)'}}
          ]
        }
      ]
    }
  }

  housePie = () => {
    return {
      color: ['#169FFF', '#20BC8B'],
      title: {
        show: true,
        textStyle: {color: '#fff', fontSize: 24},
        top: '38%',
        left: 'center',
        text: '是否有房'
      },
      legend: {
        orient: 'horizontal',
        bottom: 30,
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 26,
        textStyle: {
          fontSize: 16,
          color: '#fff'
        },
        data: ['有房', '无房']
      },
      series: [
        {
          name: '有房',
          type: 'pie',
          startAngle: -90,
          center: ['50%', '42%'],
          radius: ['62%', '66%'],
          avoidLabelOverlap: false,
          label: {show: false},
          labelLine: {
            show: false,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 75, itemStyle: {color: '#169FFF'}},
            {value: 25, itemStyle: {color: 'rgba(0,0,0,0)'}}
          ]
        },
        {
          name: '无房',
          type: 'pie',
          startAngle: -90,
          center: ['50%', '42%'],
          radius: ['46%', '50%'],
          avoidLabelOverlap: false,
          label: {show: false},
          labelLine: {
            show: false,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 25, itemStyle: {color: '#20BC8B'}},
            {value: 75, itemStyle: {color: 'rgba(0,0,0,0)'}}
          ]
        }
      ]
    }
  }

  ageBar = () => {
    return {
      tooltip: {},
      title: {
        show: true,
        textStyle: {color: '#fff', fontSize: 24},
        bottom: '4%',
        left: 'center',
        text: '年 龄 分 布'
      },
      grid: {
        left: '8%',
        right: '8%',
        top: '10%',
        bottom: '18%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#00509B',
            width: 2
          }
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          interval: 0,
          rotate: 0,
          fontSize: 14
        },
        data: ['0-19岁', '20-29岁', '30-39岁', '40-49岁', '50岁以上']
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#00509B',
            width: 2
          }
        },
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
          barWidth: '30%',
          itemStyle: {
            color: '#01CAFD'
          },
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 14,
            formatter: '{c}%'
          },
          data: [13, 34, 25, 10, 8]
        }
      ]
    }
  }

  workBar = () => {
    return {
      tooltip: {},
      title: {
        show: true,
        textStyle: {color: '#fff', fontSize: 24},
        bottom: '4%',
        left: 'center',
        text: '职 业 分 布'
      },
      grid: {
        left: '8%',
        right: '8%',
        top: '10%',
        bottom: '18%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#00509B',
            width: 2
          }
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          interval: 0,
          rotate: 0,
          fontSize: 14
        },
        data: ['公司职员', '教职工', '学生', '公务员', '快递员']
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#00509B',
            width: 2
          }
        },
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
          barWidth: '30%',
          itemStyle: {
            color: '#01CAFD'
          },
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 14,
            formatter: '{c}%'
          },
          data: [50, 25, 15, 5, 5]
        }
      ]
    }
  }

  eduPie = () => {
    return {
      color: ['#A264FF', '#F16E4B', '#D651EF', '#4C6DFE', '#009CEA'],
      title: {
        show: true,
        textStyle: {color: '#fff', fontSize: 24},
        bottom: '4%',
        left: 'center',
        text: '学 历 分 布'
      },
      legend: {
        orient: 'vertical',
        top: '20%',
        right: '16%',
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        data: ['博士', '硕士', '本科', '专科', '中专', '其他']
      },
      series: [
        {
          name: '',
          type: 'pie',
          center: ['38%', '44%'],
          radius: '50%',
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
            {value: 45, name: '博士'},
            {value: 20, name: '硕士'},
            {value: 15, name: '本科'},
            {value: 10, name: '专科'},
            {value: 5, name: '中专'},
            {value: 5, name: '其他'}
          ]
        }
      ]
    }
  }

  carBrandBar = () => {
    return {
      tooltip: {},
      title: {
        show: true,
        textStyle: {color: '#fff', fontSize: 24},
        bottom: '4%',
        left: 'center',
        text: '车辆品牌TOP10'
      },
      grid: {
        left: '8%',
        right: '8%',
        top: '10%',
        bottom: '18%',
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
          rotate: 0,
          fontSize: 14
        },
        data: ['奔驰', '大众', '本田', '宝马', '日产', '丰田', '蔚来', '雪佛兰', '奥迪', '马自达']
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
          barWidth: '30%',
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

  componentDidMount () {

  }

  render () {

    return (
      <div className='history-picture-wrap'>
        <h3 className='title'> <span className='icon'></span> 历史游客画像 <span style={{color: '#00426C'}}>(近三十天)</span></h3>
        <div className='chart-content'>
          <div className='sex-chart'>
            <ReactEcharts
              option={this.sexPie()}
              style={{height: '100%', width: '100%'}}
            />
          </div>
          <div className='age-dis'>
            <ReactEcharts
              option={this.ageBar()}
              style={{height: '100%', width: '100%'}}
            />
          </div>
          <div className='work-dis'>
            <ReactEcharts
              option={this.workBar()}
              style={{height: '100%', width: '100%'}}
            />
          </div>
          <div className='car-dis'>
            <ReactEcharts
              option={this.carPie()}
              style={{height: '100%', width: '100%'}}
            />
            <div className='value-toop'>
              <h4 className='value-text'>25%</h4>
              <h4 className='value-text'>75%</h4>
            </div>
          </div>
          <div className='house-dis'>
            <ReactEcharts
              option={this.housePie()}
              style={{height: '100%', width: '100%'}}
            />
            <div className='value-toop'>
              <h4 className='value-text'>25%</h4>
              <h4 className='value-text'>75%</h4>
            </div>
          </div>
          <div className='edu-dis'>
            <ReactEcharts
              option={this.eduPie()}
              style={{height: '100%', width: '100%'}}
            />
          </div>
          <div className='car-brand-dis'>
            <ReactEcharts
              option={this.carBrandBar()}
              style={{height: '100%', width: '100%'}}
            />
          </div>
        </div>
      </div>
    )
  }
}