/* 消费习惯 */

import React, {Component} from 'react'

import './index.less'

export default class Customer extends Component {

  state = {
    coustomerData: [
      {
        title: '酒店品牌偏好TOP10',
        data: [
          {order: 1, name: '万豪酒店'},
          {order: 2, name: '传承酒店'},
          {order: 3, name: '小天鹅酒店'},
          {order: 4, name: '城市快捷酒店'},
          {order: 5, name: '7天酒店'},
          {order: 6, name: '合肥宾馆'},
          {order: 7, name: '淮河路宾馆'},
          {order: 8, name: '富豪酒店'},
          {order: 9, name: '广州酒店'},
          {order: 10, name: '国家宾馆'}
        ]
      },
      {
        title: '体育休闲服务品牌偏好TOP10',
        data: [
          {order: 1, name: 'NIKE'},
          {order: 2, name: 'adidas'},
          {order: 3, name: '中国李宁'},
          {order: 4, name: '安踏'},
          {order: 5, name: 'supreme'},
          {order: 6, name: '冠军'},
          {order: 7, name: '胜道体育'},
          {order: 8, name: '淮河体育'},
          {order: 9, name: '篮球体育'},
          {order: 10, name: '万达体育'}
        ]
      },
      {
        title: '生活服务品牌偏好TOP10',
        data: [
          {order: 1, name: '苏宁易购'},
          {order: 2, name: '小米生活'},
          {order: 3, name: '国美电器'},
          {order: 4, name: '格力电器'},
          {order: 5, name: '奥特莱斯'},
          {order: 6, name: '友谊商城'},
          {order: 7, name: '万达百货'},
          {order: 8, name: '百佳超市'},
          {order: 9, name: '天河城百货'},
          {order: 10, name: '王府井百货'}
        ]
      },
      {
        title: '餐饮服务品牌偏好TOP10',
        data: [
          {order: 1, name: '凤姐老火锅'},
          {order: 2, name: '杨记隆府'},
          {order: 3, name: '小天鹅火锅'},
          {order: 4, name: '外婆桥'},
          {order: 5, name: '苍龙火锅'},
          {order: 6, name: '不过如此火锅'},
          {order: 7, name: '红九格老火锅'},
          {order: 8, name: '李串串老店'},
          {order: 9, name: '周师兄大腰刀片火锅'},
          {order: 10, name: '巫山纸包鱼'}
        ]
      },
      {
        title: '娱乐场所poi偏好TOP10',
        data: [
          {order: 1, name: '天上人间'},
          {order: 2, name: '好乐迪KTV'},
          {order: 3, name: '淮河路洗脚城'},
          {order: 4, name: '养生馆'},
          {order: 5, name: '霸王养发馆'},
          {order: 6, name: '美莱休闲馆'},
          {order: 7, name: '万达电影'},
          {order: 8, name: '海洋世界'},
          {order: 9, name: 'VR世界'},
          {order: 10, name: '飞扬影城'}
        ]
      },
      {
        title: '商场poi偏好TOP10',
        data: [
          {order: 1, name: '时代广场'},
          {order: 2, name: '大都汇东方广场'},
          {order: 3, name: '国泰广场'},
          {order: 4, name: '新华书店'},
          {order: 5, name: '重百大楼'},
          {order: 6, name: '协信星光广场'},
          {order: 7, name: '金鹰财富中心'},
          {order: 8, name: '英利大融城'},
          {order: 9, name: '环球购物中心'},
          {order: 10, name: '女人广场'}
        ]
      }
    ]
  }

  render () {
    const { coustomerData } = this.state
    return (
      <div className='customer-wrap'>
        <h3 className='title'> <span className='icon'></span> 消费习惯</h3>
        <div className='customer-container'>
          {
            coustomerData.map(item => (
              <div className='customer-content' key={item.title}>
                <h4 className='sub-title'>{item.title}</h4>
                {item.data.map(inner => (
                  <p className='customer-row' key={inner.order}>{inner.order} &nbsp; {inner.name}</p>
                ))}
              </div>
            ))
          }
          
        </div>
      </div>
    )
  }
}