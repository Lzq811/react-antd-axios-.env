/* 右侧区域 */

import React, {Component} from 'react'

import 'echarts'
import ReactEcharts from 'echarts-for-react'

import './index.less'

export default class Right extends Component {

  state = {
    keyNumList: Array.from(Array(43), (v,k) =>k),
    currentSexUrl: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/132.jpg'
  }

  sexPie = () => {
    return {
      color: ['#169FFF', '#FC386B', '#0E8BFF'],
      title: {
        show: true,
        text: '男女比例',
        textStyle: {color: '#fff', fontSize: 26},
        left: '16%',
        top: '44%',
      },
      legend: {
        show: true,
        textStyle: {
          color: '#fff',
          fontSize: 16
        },
        itemWidth: 16,
        itemHeight: 16,
        icon: 'circle',
        itemGap: 40,
        left: '10%',
        bottom: '8%'
        // data: ['']
      },
      series: [
        {
          name: '',
          type: 'pie',
          center: ['24%', '48%'],
          radius: ['48%', '56%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
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
            {value: 45, name: '男:45%'},
            {value: 55, name: '女:55%'}
          ]
        }
      ]
    }
  }

  agePie = () => {
    return {
      color: ['#217CFF', '#B361FF', '#FF42CE', '#009EE8', '#F47E2D'],
      title: {
        show: true,
        text: '年龄比例',
        textStyle: {color: '#fff', fontSize: 22},
        right: '26%',
        bottom: '8%',
      },
      legend: {
        show: true,
        orient: 'vertical',
        textStyle: {
          color: '#fff',
          fontSize: 16
        },
        itemWidth: 16,
        itemHeight: 16,
        icon: 'circle',
        right: '2%',
        itemGap: 20,
        top: '22%'
        // data: ['']
      },
      series: [
        {
          name: '',
          type: 'pie',
          center: ['66%', '48%'],
          radius: ['28%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'inside',
            color: '#fff',
            fontSize: 14,
            formatter: '{c}%'
          },
          
          labelLine: {
            show: false,
            // length: 8,
            // length2: 6,
            lineStyle: {color: '#fff'}
          },
          data: [
            {value: 5, name: '19岁以下'},
            {value: 25, name: '20-29岁'},
            {value: 30, name: '30-39岁'},
            {value: 15, name: '40-49岁'},
            {value: 20, name: '50岁以上'}
          ]
        }
      ]
    }
  }

  render () {
    const {keyNumList, currentSexUrl} = this.state
    return (
      <div className='right-items-wrap'>
        <div className='member-data'>
          <h3 className='title'> <span className='icon'></span> 会员数据</h3>
          <div className='member-item history'>
            <h2>56,243<span>人</span></h2>
            <p>历史会员总数</p>
          </div>
          <div className='member-item today'>
            <h2>6,234<span>人</span></h2>
            <p>当天新增会员数</p>
          </div>
        </div>
        <div className='member-pic'>
          <h3 className='title'> <span className='icon'></span> 近30天新增会员画像</h3>
          <div className='bac-circle'></div>
          <div className='sex-rate items'>
            <ReactEcharts
              option={this.sexPie()}
              style={{height: '100%', width: '100%'}}
            />
          </div>
          <div className='age-rate items'>
            <ReactEcharts
              option={this.agePie()}
              style={{height: '100%', width: '100%'}}
            />
          </div>
        </div>
        <div className='member-detail'>
          <h3 className='title'> <span className='icon'></span> 会员数据</h3>
          <div className='run-ball'></div>
          <div className='indicator-line'></div>
          <div className='bottom-site'></div>
          <div className='waves-line'></div>
          <div className='people-pic'></div>
          <ul className="movement">
            {
              keyNumList.map(item => (
                <li key={item} className={`li${item}`}><span className="ani-li"></span></li>
              ))
            }
          </ul>
          <div className='detail-box'>
            <div className='sex'>男</div>
            <div className='pic'>
              <img width='100%' height='100%' src={currentSexUrl}/>
            </div>
            <div className='custom'>消费能力: 2~4 万</div>
            <div className='active-time'>最近一次活动时间: 2020-06-10 12:00:00</div>
            <div className='phone-num'>136****0987</div>
            <div className='come-from'>来源渠道: 小程序</div>
            <div className='city'>广州</div>
            {/* <div className='phone-code'>手机型号: iphone XS</div> */}
          </div>
        </div>
      </div>
    )
  }
}