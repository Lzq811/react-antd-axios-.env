/* 创新指数 */

import React, {Component} from 'react'

import LeftTop from '../../components/innovateCom/leftTop'
import LeftBottom from '../../components/innovateCom/leftBottom'
import CenterTop from '../../components/innovateCom/centerTop'
import CenterBottom from '../../components/innovateCom/centerBottom'
import RightTop from '../../components/innovateCom/rightTop'
import RightBottom from '../../components/innovateCom/rightBottom'
import Header from '../../components/header'

import { Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import './index.less'

export default class Innovate extends Component {
  state = {
    visible: false,
    modalData: [
      {
        title: '步行街网红店',
        list: ['网红店1', '网红店2', '网红店3', '网红店4']
      },
      {
        title: '步行街文创店',
        list: ['文创店1', '文创店2', '文创店3', '文创店4']
      },
      {
        title: '步行街旗舰店',
        list: ['旗舰店1', '旗舰店2', '旗舰店3', '旗舰店4']
      }
    ]
  }

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
  render () {
    const {visible, modalData} = this.state
    return (
      <div className='innovate-wrap'>
        <div className='header-container'>
          <Header title={'北京路步行街创新指数大屏'}></Header>
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
        <div className='dialog-btn' onClick={this.showModal}>特色商铺</div>
        <Modal
          title="特色商铺"
          visible={visible}
          onCancel={this.handleCancel}
          centered={true}
          footer={null}
          closeIcon={<CloseOutlined style={{fontSize: '20px', color: '#02CDFF'}}/>}
          style={{background: '#000'}}
          width={600}
          bodyStyle={{background: '#000'}}
        >
          <div className='modal-content'>
          {
            modalData.map(item => (
              <div className='list-item'>
                <div className='title'>{item.title}</div>
                {
                  item.list.map(list => (
                    <div className='items'>{list}</div>
                  ))
                }
              </div>
            ))
          }
          </div>
        </Modal>
      </div>
    )
  }
}