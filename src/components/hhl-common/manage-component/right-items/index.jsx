/* 经营分析大屏右侧的图表 */

import React, {Component} from 'react'

import 'echarts'
import ReactEcharts from 'echarts-for-react'

import './index.less'

export default class RightWrap extends Component {

  state = {
    currentOrderType: 1, // 默认今日
    saleOrderTable: {
      brand: [
        {order: 1, name: 'UR', unit: 120530},
        {order: 2, name: 'FILA', unit: 102365},
        {order: 3, name: '谢瑞麟', unit: 96320},
        {order: 4, name: '施华洛世奇', unit: 86532},
        {order: 5, name: '潘多拉', unit: 82365}
      ],
      resale: [
        {order: 1, name: 'UR', unit: 120530},
        {order: 2, name: 'FILA', unit: 102365},
        {order: 3, name: '谢瑞麟', unit: 96320},
        {order: 4, name: '施华洛世奇', unit: 86532},
        {order: 5, name: '潘多拉', unit: 82365}
      ]
    }
  }

  detalLineBarOption = () => {
    return {
      color: ['#01CAFD', '#F73769'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        left: '4%',
        right: '4%',
        top: '30%',
        bottom: '8%',
        containLabel: true
      },
      legend: {
        itemWidth: 16,
        itemHeigth: 16,
        itemGap: 20,
        top: '6%',
        right: '4%',
        textStyle: {color: '#fff', fontSize: 16},
        data: ['交易额', '笔数']
      },
      xAxis: [
        {
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
          data: ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '交易额',
          nameTextStyle: { color: '#fff', fontSize: 16 },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 14
          }
        },
        {
          type: 'value',
          name: '笔数',
          nameTextStyle: { color: '#fff', fontSize: 16 },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 14
          },
        }
      ],
      series: [
        {
          name: '交易额',
          type: 'bar',
          barWidth: '30%',
          data: [1234580, 1433300, 2103000, 1667800, 1900220, 206600, 1800000, 1157700, 1088000, 1490000, 1000990, 1000008]
        },
        {
          name: '笔数',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 12,
          yAxisIndex: 1,
          data: [1000, 1010, 1403, 1600, 1900, 2000, 1800, 2100, 1988, 1490, 1230, 987]
        }
      ]
    }
  }

  waveLineBarOption = () => {
    return {
      color: ['#01CAFD', '#F73769'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        left: '4%',
        right: '4%',
        top: '40%',
        bottom: '8%',
        containLabel: true
      },
      legend: {
        itemWidth: 16,
        itemHeigth: 16,
        itemGap: 20,
        top: '6%',
        right: '4%',
        textStyle: {color: '#fff', fontSize: 16},
        data: ['交易额', '客单价']
      },
      xAxis: [
        {
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
          data: ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '交易额',
          nameTextStyle: { color: '#fff', fontSize: 16 },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 14
          }
        },
        {
          type: 'value',
          name: '客单价',
          nameTextStyle: { color: '#fff', fontSize: 16 },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 14
          },
        }
      ],
      series: [
        {
          name: '交易额',
          type: 'bar',
          barWidth: '30%',
          data: [1234580, 1433300, 2103000, 1667800, 1900220, 206600, 1800000, 1157700, 1088000, 1490000, 1000990, 1000008]
        },
        {
          name: '客单价',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 12,
          yAxisIndex: 1,
          data: [1000, 1010, 1403, 1600, 1900, 2000, 1800, 2100, 1988, 1490, 1230, 987]
        }
      ]
    }
  }

  waveBarOption = () => {
    return {
      color: ['#0183FD', '#00E4FF', '#FC386B'],
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        left: '4%',
        right: '4%',
        top: '30%',
        bottom: '8%',
        containLabel: true
      },
      legend: {
        itemWidth: 16,
        itemHeigth: 16,
        itemGap: 20,
        top: '6%',
        right: '4%',
        textStyle: {color: '#fff', fontSize: 16},
        data: ['本周', '环比上周', '去年同期']
      },
      xAxis: [
        {
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '交易额',
          nameTextStyle: { color: '#fff', fontSize: 16 },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 14
          }
        }
      ],
      series: [
        {
          name: '本周',
          type: 'bar',
          barWidth: '18%',
          barGap: 0,
          data: [400, 500, 300, 456, 378, 689]
        },
        {
          name: '环比上周',
          type: 'bar',
          barWidth: '18%',
          barGap: 0,
          data: [388, 478, 435, 507, 550, 701, 780]
        },
        {
          name: '去年同期',
          type: 'bar',
          barWidth: '18%',
          barGap: 0,
          data: [268, 300, 400, 388, 534, 666, 689]
        }
      ]
    }
  }

  disBarOption = () => {
    return {
      color: ['#01CAFD'],
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        left: '4%',
        right: '4%',
        top: '30%',
        bottom: '8%',
        containLabel: true
      },
      legend: {
        show: false,
        itemWidth: 16,
        itemHeigth: 16,
        itemGap: 20,
        top: '6%',
        right: '4%',
        textStyle: {color: '#fff', fontSize: 16},
        data: ['本周', '环比上周', '去年同期']
      },
      xAxis: [
        {
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
          data: ['餐饮', '零售', '娱乐', '旅游']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '交易额',
          nameTextStyle: { color: '#fff', fontSize: 16 },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 14
          }
        }
      ],
      series: [
        {
          name: '本周',
          type: 'bar',
          barWidth: '26%',
          data: [400, 500, 300, 456, 378, 689]
        }
      ]
    }
  }

  payTypePie = () => {
    return {
      color: ['#FF943D', '#04B786', '#0E8BFF', '#1ECDFF', '#FF6262'],
      title: {show: false},
      legend: {show: false},
      series: [
        {
          name: '',
          type: 'pie',
          center: ['50%', '52%'],
          radius: ['48%', '56%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'outside',
            color: '#fff',
            fontSize: 14,
            formatter: '{b}: {c}%'
          },
          
          labelLine: {
            show: true,
            // length: 8,
            // length2: 6,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 5, name: '现金消费额'},
            {value: 25, name: '微信支付消费额'},
            {value: 30, name: '支付宝支付消费额'},
            {value: 15, name: '银行卡消费额'},
            {value: 20, name: '银联消费额'}
          ]
        }
      ]
    }
  }

  toggleOrder = (type) => {
    // type 1今日 2本年
    // if (type === 1) {
      this.setState({currentOrderType: type})
    // }
  }

  componentDidMount () {}

  render () {
    const {currentOrderType, saleOrderTable} = this.state
    return (
      <div className='right-wrap'>
        <div className='list-item'>
          <h3 className='title'> <span className='icon'></span> 当天时段交易分析</h3>
          <ReactEcharts
            option={this.detalLineBarOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='list-item'>
          <h3 className='title'> <span className='icon'></span> 本年交易额及客单价波动图</h3>
          <div className='detail-box'>
            <div className='detail-deal'>本年累计交易总额 999,999,990元</div>
            <div className='detail-price'>本年到访游客客单价 299元</div>
          </div>
          <ReactEcharts
            option={this.waveLineBarOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='list-item'>
          <h3 className='title'> <span className='icon'></span> 当天支付方式偏好</h3>
          <ReactEcharts
            option={this.payTypePie()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='list-item'>
          <h3 className='title'> <span className='icon'></span> 日交易趋势</h3>
          <ReactEcharts
            option={this.waveBarOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='list-item'>
          <h3 className='title'> <span className='icon'></span> 当天营收业态分布</h3>
          <ReactEcharts
            option={this.disBarOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='list-item'>
          <h3 className='title'> <span className='icon'></span> 商户销售排行榜(TOP5)</h3>
          <div className='order-tabs'>
            <div className={`tab-item ${currentOrderType === 1 ? 'active' : null}`} onClick={() => {this.toggleOrder(1)}}>今日排行榜</div>
            <div className={`tab-item ${currentOrderType === 2 ? 'active' : null}`} onClick={() => {this.toggleOrder(2)}}>本年排行榜</div>
          </div>
          <div className='table'>
            <div className='table-item'>
              <div className='table-title'>品牌排名</div>
              <div className='title-item'>
                <div className='item item-order'>排名</div>
                <div className='item item-name'>商户名</div>
                <div className='item item-price'>交易金额(元)</div>
              </div>
              {
                saleOrderTable.brand.map(item => (
                  <div className='table-row' key={item.order}>
                    <div className='item item-order'>{item.order}</div>
                    <div className='item item-name'>{item.name}</div>
                    <div className='item item-price'>{item.unit > 1000 ? item.unit.toLocaleString() : item.unit}</div>
                  </div>
                ))
              }
            </div>
            <div className='table-item'>
              <div className='table-title'>品牌排名</div>
              <div className='title-item'>
                <div className='item item-order'>排名</div>
                <div className='item item-name'>商户名</div>
                <div className='item item-price'>交易金额(元)</div>
              </div>
              {
                saleOrderTable.resale.map(item => (
                  <div className='table-row' key={item.order}>
                    <div className='item item-order'>{item.order}</div>
                    <div className='item item-name'>{item.name}</div>
                    <div className='item item-price'>{item.unit > 1000 ? item.unit.toLocaleString() : item.unit}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}