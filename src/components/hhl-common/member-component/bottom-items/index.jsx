/* 会员大屏底部 */

import React, {Component} from 'react'

import 'echarts'
import ReactEcharts from 'echarts-for-react'
import 'echarts-liquidfill'

import { Rate } from 'antd'

import './index.less'

export default class Bttome extends Component {

  state = {
    currentOrderType: 1,
    data: [
      {
        logo: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/KFC.png',
        name: '淮河路肯德基',
        slogan: 'It is finger lickin good',
        address: '淮河路步行街533号06单元肯德基',
        business: '餐饮、食品、文娱、文化',
        discounts: '优惠信息：中国肯德基官方网站。肯德基KFC坚持“立足中国、融入生活”,打造新快餐,提供早餐,午餐,下午茶,晚餐,夜宵和甜品站等丰富选择。网上订餐,天天优惠。电子优惠券,打印即...'
      },
      {
        logo: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/lining.png',
        name: '中国李宁',
        slogan: '一切皆有可能',
        address: '淮河路步行街533号06单元肯德基',
        business: '餐饮、食品、文娱、文化',
        discounts: '优惠信息：中国肯德基官方网站。肯德基KFC坚持“立足中国、融入生活”,打造新快餐,提供早餐,午餐,下午茶,晚餐,夜宵和甜品站等丰富选择。网上订餐,天天优惠。电子优惠券,打印即...'
      },
      {
        logo: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/haidilao.png',
        name: '海底捞火锅',
        slogan: 'It is finger lickin good',
        address: '淮河路步行街533号06单元肯德基',
        business: '餐饮、食品、文娱、文化',
        discounts: '优惠信息：中国肯德基官方网站。肯德基KFC坚持“立足中国、融入生活”,打造新快餐,提供早餐,午餐,下午茶,晚餐,夜宵和甜品站等丰富选择。网上订餐,天天优惠。电子优惠券,打印即...'
      },
      {
        logo: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/zhouliufu.png',
        name: '周六福',
        slogan: 'It is finger lickin good',
        address: '淮河路步行街533号06单元肯德基',
        business: '餐饮、食品、文娱、文化',
        discounts: '优惠信息：中国肯德基官方网站。肯德基KFC坚持“立足中国、融入生活”,打造新快餐,提供早餐,午餐,下午茶,晚餐,夜宵和甜品站等丰富选择。网上订餐,天天优惠。电子优惠券,打印即...'
      },
      {
        logo: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/wanjia.png',
        name: '华瑞万家',
        slogan: 'It is finger lickin good',
        address: '淮河路步行街533号06单元肯德基',
        business: '餐饮、食品、文娱、文化',
        discounts: '优惠信息：中国肯德基官方网站。肯德基KFC坚持“立足中国、融入生活”,打造新快餐,提供早餐,午餐,下午茶,晚餐,夜宵和甜品站等丰富选择。网上订餐,天天优惠。电子优惠券,打印即...'
      },
      {
        logo: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/waipojia.png',
        name: '外婆家',
        slogan: 'It is finger lickin good',
        address: '淮河路步行街533号06单元肯德基',
        business: '餐饮、食品、文娱、文化',
        discounts: '优惠信息：中国肯德基官方网站。肯德基KFC坚持“立足中国、融入生活”,打造新快餐,提供早餐,午餐,下午茶,晚餐,夜宵和甜品站等丰富选择。网上订餐,天天优惠。电子优惠券,打印即...'
      },
      {
        logo: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/nike.png',
        name: 'NIKE旗舰店',
        slogan: 'It is finger lickin good',
        address: '淮河路步行街533号06单元肯德基',
        business: '餐饮、食品、文娱、文化',
        discounts: '优惠信息：中国肯德基官方网站。肯德基KFC坚持“立足中国、融入生活”,打造新快餐,提供早餐,午餐,下午茶,晚餐,夜宵和甜品站等丰富选择。网上订餐,天天优惠。电子优惠券,打印即...'
      },
      {
        logo: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/Medload.png',
        name: '淮河路麦当劳',
        slogan: 'It is finger lickin good',
        address: '淮河路步行街533号06单元肯德基',
        business: '餐饮、食品、文娱、文化',
        discounts: '优惠信息：中国肯德基官方网站。肯德基KFC坚持“立足中国、融入生活”,打造新快餐,提供早餐,午餐,下午茶,晚餐,夜宵和甜品站等丰富选择。网上订餐,天天优惠。电子优惠券,打印即...'
      }
    ],
    merchantData: [
      {order: '01', name: '淮河路肯德基', rate: 5},
      {order: '02', name: '麦当劳', rate: 5},
      {order: '03', name: '淮河路nike旗舰店', rate: 5},
      {order: '04', name: '李宁国潮旗舰店', rate: 5},
      {order: '05', name: '海底捞火锅', rate: 5},
      {order: '06', name: '重庆火锅', rate: 4},
      {order: '07', name: '外婆家', rate: 4},
      {order: '08', name: '周六福', rate: 4},
      {order: '09', name: '周生生珠宝', rate: 3},
      {order: '10', name: '家乐福超市', rate: 1}
    ]
  }

  liquidFillOption = () => {
    return {
      title: {
        show: true,
        text: '当前街区商铺空置率',
        bottom: 14,
        left: 'center',
        textStyle: {color: '#fff', fontSize: 18}
      },
      series: [
        {
          type: 'liquidFill',
          radius: '200',
          phase: 0,
          period: function (value, index) {
            return 2000 * index + 1700
          },
          center : ['50%', "52%"],
          waveLength: '90%',
          amplitude: '5%',
          outline: {
            show: false
          },
          backgroundStyle: {
            color: 'rgba(255, 255, 255, 0.9)'
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
                fontSize: 70,
                fontFamily:'serif'
              },
              b:{
                color:'rgb(255,255,255)',
                fontSize: 30,
                padding: [0, 0, 36, 0]
              }
            }
          }
        }
      ]
    }
  }

  toggleOrder = (num) => {
    this.setState({currentOrderType: num})
  }

  render () {
    const {data, currentOrderType, merchantData} = this.state
    return (
      <div className='bottom-wrap'>
        <div className='left bottom-item'>
          <div className='big-title'>商户共治预警</div>
          <ReactEcharts
            option={this.liquidFillOption()}
            style={{height: '100%', width: '100%'}}
          />
        </div>
        <div className='center bottom-item'>
          <h3 className='title'> <span className='icon'></span> TOP10商户</h3>
          <div className='order-tabs'>
            <div className={`tab-item ${currentOrderType === 1 ? 'active' : null}`} onClick={() => {this.toggleOrder(1)}}>A类</div>
            <div className={`tab-item ${currentOrderType === 2 ? 'active' : null}`} onClick={() => {this.toggleOrder(2)}}>B类</div>
            <div className={`tab-item ${currentOrderType === 3 ? 'active' : null}`} onClick={() => {this.toggleOrder(3)}}>C类</div>
          </div>
          <div className='content'>
            {
              merchantData.map(item => (
                <div className='content-item' key={item.order}>
                  {item.order} &nbsp; {item.name} &nbsp; <Rate style={{fontSize: '20px', color: '#FFD800'}} disabled defaultValue={item.rate} />
                </div>
              ))
            }
          </div>
        </div>
        <div className='right bottom-item'>
          <h3 className='title'> <span className='icon'></span> 商户详情</h3>
          <div className='content'>
            {
              data.map(item => (
                <div className='content-items' key={item.name}>
                  <div className='left-logo'>
                    <img src={item.logo} alt=''/>
                  </div>
                  <div className='right-desc'>
                    <h4>{item.name}</h4>
                    <h5>Slogan: <span>{item.slogan}</span></h5>
                    <h5>商户地址: <span>{item.address}</span></h5>
                    <h5>主营业务: <span>{item.business}</span></h5>
                    <h5>优惠信息: <span>{item.discounts}</span></h5>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}