/* 大屏左侧内容 */

import React, {Component} from 'react'

import 'echarts'
import ReactEcharts from 'echarts-for-react'

import './index.less'

export default class Left extends Component {

  state = {
    table: [
      {order: 1, time: '2018.04.13 09:02', coustom: '屈臣氏', content: '服务态度非常好感觉完美'},
      {order: 2, time: '2018.04.13 09:02', coustom: '山东老家', content: '非常好吃'},
      {order: 3, time: '2018.04.13 09:02', coustom: '广州酒家', content: '非常有特色，感受不一样'},
      {order: 4, time: '2018.04.13 09:02', coustom: '西贝', content: '烤羊肉特别好吃，服务一级棒'},
      {order: 5, time: '2018.04.13 09:02', coustom: '木屋烧烤', content: '上菜非常快！就是服务要优化下上菜非常快！就是服务要优化下才'},
      {order: 6, time: '2018.04.13 09:02', coustom: 'adidas旗舰店', content: '好多折扣啊！买买买买'},
      {order: 7, time: '2018.04.13 09:02', coustom: '优衣库', content: '出了好多新款特别适合我'},
      {order: 8, time: '2018.04.13 09:02', coustom: 'H&M', content: '感觉贵了点，但是呢新款还是非常好'},
      {order: 9, time: '2018.04.13 09:02', coustom: '山东老家', content: '非常有特色，感受不一样'},
      {order: 10, time: '2018.04.13 09:02', coustom: '好莱客', content: '上菜非常快！就是服务要优化下才菜非常快！就是服务要优化下才…'},
      {order: 11, time: '2018.04.13 09:02', coustom: '大地影城', content: '好多折扣啊！买买买买'},
      {order: 12, time: '2018.04.13 09:02', coustom: '袁老四火锅', content: '出了好多新款特别适合我'},
      {order: 13, time: '2018.04.13 09:02', coustom: '蟹肉煲', content: '感觉贵了点，但是呢新款还是非常好'},
      {order: 14, time: '2018.04.13 09:02', coustom: '汉堡王', content: '一般般'},
      {order: 15, time: '2018.04.13 09:02', coustom: '恐龙餐厅', content: '感觉贵了点，环境好'},
      {order: 16, time: '2018.04.13 09:02', coustom: '恐龙餐厅', content: '感觉贵了点，环境好'},
      {order: 17, time: '2018.04.13 09:02', coustom: '恐龙餐厅', content: '感觉贵了点，环境好'}
    ]
  }

  payTypePie = () => {
    return {
      color: ['#009EE8', '#F37E2F', '#2175FF', '#B361FF', '#FF34CE'],
      title: {
        show: true,
        text: '业态',
        left: 'center',
        top: '48%',
        textStyle: {color: '#00E4FF', fontSize: 38, fontWeight: 700}
      },
      legend: {
        show: true,
        bottom: '4%',
        left: 'center',
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 30,
        icon: 'circle',
        textStyle: {color: '#fff', fontSize: 20},
        data: ['零售', '服饰', '文娱', '餐饮', '其他']
      },
      series: [
        {
          name: '',
          type: 'pie',
          center: ['50%', '52%'],
          radius: ['46%', '54%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'outside',
            color: '#fff',
            fontSize: 18,
            formatter: '{c}%'
          },
          
          labelLine: {
            show: true,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 5, name: '零售'},
            {value: 25, name: '服饰'},
            {value: 30, name: '文娱'},
            {value: 15, name: '餐饮'},
            {value: 20, name: '其他'}
          ]
        }
      ]
    }
  }

  componentDidMount () {

  }

  render () {
    const {table} = this.state
    return (
      <div className='left-wrap'>
        <div className='top-chart'>
          <h3 className='title'> <span className='icon'></span> 业态分布</h3>
          <ReactEcharts
            option={this.payTypePie()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='table'>
          <h3 className='title'> <span className='icon'></span> 共治预警</h3>
          <div className='table-title'>
            <h4 className='title-item order'>序号</h4>
            <h4 className='title-item time'>评价时间</h4>
            <h4 className='title-item coustom'>评价商户</h4>
            <h4 className='title-item content'>评价内容</h4>
          </div>
          {
            table.map(item => (
              <div className='table-row' key={item.order}>
                <h4 className='table-item order'>{item.order}</h4>
                <h4 className='table-item time'>{item.time}</h4>
                <h4 className='table-item coustom'>{item.coustom}</h4>
                <h4 className='table-item content'>{item.content}</h4>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}