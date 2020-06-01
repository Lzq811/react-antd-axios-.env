import React, {Component} from 'react'

import Header from '../../../components/hhl-common/header'

import './index.less'

export default class Develop extends Component {

  state = {
    title: 'hello'
  }

  toggle = () => {
    setTimeout(() => {
      this.setState({title: 'world'})
    }, 10000)
  }

  componentDidMount () {
    this.toggle()
  }

  render () {

    return (
      <div className="develop-screen">
        <Header title='北京路步行街发展指数大屏'></Header>
        <div className="content">
          <div className="top-container">
            <div className="left">
              {/* <Border :width='464' :height='644' title='2020年6月综合数据概览'></Border> */}
              <div className="content">
                {/* <Unit :data='unitData' :margin='44'></Unit> */}
              </div>
            </div>
            <div className="center">
              {/* <Border :width='664' :height='644' title='近6个月步行街发展指数趋势'></Border> */}
              <div className="content">
                {/* <MainLine></MainLine> */}
              </div>
            </div>
            <div className="right">
              {/* <Border :width='464' :height='644' title='2020年6月步行街发展指数'></Border> */}
              <div className="content">
                {/* <DevelopNum></DevelopNum> */}
              </div>
            </div>
          </div>
          <div className="bottom-container">
            {/* <Border :width='1660' :height='456' title='近6个月步行街发展指数因素的波动走势'></Border> */}
            <div className="content">
              {/* <div className="passenger"><WaveTrend title='客流' color='#00CCFF' :data='parssengerData'></WaveTrend></div>
              <div className="develop"><WaveTrend title='成长' color='#2165FF' :data='developData'></WaveTrend></div>
              <div className="radiation"><WaveTrend title='辐射' color='#9962FF' :data='radiationData'></WaveTrend></div>
              <div className="operate"><WaveTrend title='经营' color='#FF54BD' :data='operateData'></WaveTrend></div>
              <div className="innovate"><WaveTrend title='创新' color='#FF6550' :data='innovateData'></WaveTrend></div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}