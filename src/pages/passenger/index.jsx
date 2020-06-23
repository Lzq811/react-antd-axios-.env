/* 客流指数 */

import React, {Component} from 'react'

import LeftTop from '../../components/passengerCom/leftTop'
import LeftBottom from '../../components/passengerCom/leftBottom'
import CenterTop from '../../components/passengerCom/centerTop'
import CenterBottom from '../../components/passengerCom/centerBottom'
import RightTop from '../../components/passengerCom/rightTop'
import Header from '../../components/header'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import { Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import './index.less'

export default class Passenger extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  barChartOption = () => {
    return {
      title: {show: false},
      grid: {
        top: 0,
        bottom: 0,
        right: '6%',
        left: '4%',
        containLabel: true
      },
      legend: {
        show: false
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: ['王府井步行街', '北京路步行街', '南京路步行街', '上下九步行街', '新街口步行街', '解放碑步行街', '解放碑步行街'].reverse()
      },
      xAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 18
          },
          formatter: '{value}%'
        },
      },
      series: [
        {
          type: 'bar',
          barWidth: '26%',
          barGap: '50%',
          itemStyle: {
            color: '#02CDFF'
          },
          data: [31, 28, 25, 20, 16, 12, 9].reverse()
        }
      ]
    }
  }

  render () {

    return (
      <div className='growth-wrap'>
        <div className='header-container'>
          <Header title={'北京路步行街客流指数大屏'}></Header>
        </div>
        <div className='top-container'>
          <div className='left'>
            <LeftTop></LeftTop>
          </div>
          <div className='center'>
            <CenterTop></CenterTop>
          </div>
          <div className='right'>
            <RightTop></RightTop>
          </div>
        </div>
        <div className='bottom-container'>
          <div className='left'>
            <LeftBottom></LeftBottom>
          </div>
          <div className='center'>
            <CenterBottom></CenterBottom>
          </div>
        </div>
        <div className='dialog-btn' onClick={this.showModal}>客流排名</div>
        <Modal
          title="步行街客流排名"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          centered={true}
          footer={null}
          closeIcon={<CloseOutlined style={{fontSize: '20px', color: '#02CDFF'}}/>}
          style={{background: '#000'}}
          width={600}
          bodyStyle={{background: '#000'}}
        >
          <div className='modal-content'>
            <ReactEcharts
              option={this.barChartOption()}
              style={{height: '100%', width: '100%'}}
            />
          </div>
        </Modal>
      </div>
    )
  }
}