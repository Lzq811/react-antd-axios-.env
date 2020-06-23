/* 经营指数 */

import React, {Component} from 'react'

import LeftTop from '../../components/operateCom/leftTop'
import LeftBottom from '../../components/operateCom/leftBottom'
import CenterTop from '../../components/operateCom/centerTop'
import CenterBottom from '../../components/operateCom/centerBottom'
import RightTop from '../../components/operateCom/rightTop'
import RightBottom from '../../components/operateCom/rightBottom'
import Header from '../../components/header'

import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

import { Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import './index.less'

export default class Operate extends Component {
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
        data: ['北京路', '正佳广场', '天河城百货', '上下九步行街', '花城汇广场', '广州K11'].reverse()
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
          data: [31, 28, 25, 20, 16, 12].reverse()
        }
      ]
    }
  }

  render () {

    return (
      <div className='operate-wrap'>
        <div className='header-container'>
          <Header title={'北京路步行街经营指数大屏'}></Header>
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
          <div className='right'>
            <RightBottom></RightBottom>
          </div>
        </div>
        <div className='dialog-btn' onClick={this.showModal}>租金排名</div>
        <Modal
          title="租金排名"
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