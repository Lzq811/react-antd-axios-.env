import React, {Component} from 'react'

import Header from '../../../components/hhl-common/header'
import MediaAnalyze from '../../../components/hhl-common/passenger-component/media-analyze/index' // 媒体分析
import Customer from '../../../components/hhl-common/passenger-component/customer' // 媒体分析
import HistoryPicture from '../../../components/hhl-common/passenger-component/history-picture' // 历史游客画像
import Relation from '../../../components/hhl-common/passenger-component/relation' // 人地关系
import PassengerTred from '../../../components/hhl-common/passenger-component/passenger-trend'
import PssengerNum from '../../../components/hhl-common/passenger-component/passenger-num'

import './index.less'

export default class Passenger extends Component {

  state = {
    // 117.293319,31.864425
  }

  initMap = () => {
    const container = this.refs.mapcontainer
    const buildingLayer = new window.AMap.Buildings({zIndex:130,merge:false,sort:false,zooms:[17,20]});
    const options = {
      hideWithoutStyle: false,//是否隐藏设定区域外的楼块
      areas: [
        {
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff30afff',//楼顶颜色
          color2: 'ff0071b9',//楼面颜色
          lineColor: [48,175,255, 1],
          path: [
            [117.299043,31.865343],
            [117.298861,31.8623],
            [117.294601,31.862245],
            [117.290278,31.861562],
            [117.287048,31.861498],
            [117.284988,31.861744],
            [117.285117,31.863566],
            [117.285621,31.865525],
            [117.286169,31.867494],
            [117.289688,31.866701],
            [117.292853,31.866118],
            [117.295095,31.865699],
            [117.299043,31.865343]
          ]
        }
      ]
    }
    buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle
    const map = new window.AMap.Map(container, {
      zoom: 17.8,
      zoomEnable: false,
      // zooms: [17, 18],
      dragEnable: false,
      pitch: 60,
      skyColor: '#45B7FE',
      showIndoorMap: false,
      showLabel: false,
      mapStyle: 'amap://styles/ffaca3b000b8fd533368b6ad6a7cc603',
      center: [117.292198, 31.8636],
      features: ['bg','point','road'],
      viewMode:'3D',
      buildingAnimation: true,
      layers: [
        new window.AMap.TileLayer({}),
        buildingLayer
      ]
    })
    new window.AMap.Polygon({
      bubble:true,
      fillColor:'#0079e7',
      fillOpacity:0.4,
      strokeWeight:1,
      path: options.areas[0].path,
      map: map
    })
    const marker = new window.AMap.Marker({
      icon: "http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/current-arrow.png",
      position: [117.293319,31.864425],
      offset: new window.AMap.Pixel(0, -220)
    })
    marker.setMap(map)
    // marker.setAnimation('AMAP_ANIMATION_BOUNCE')
    let deg = 0
    let step = 0.1
    setInterval(() => {
      deg += step
      if (deg > 45) {
        step = -step
      } else if (deg < -45) {
        step = -step
      }
      map.setRotation(deg)
    }, 20)
  }

  componentDidMount () {
    this.initMap()
  }

  render () {

    return (
      <div className='passenger-wrap'>
        <div className='map-container'>
          <div ref='mapcontainer' className='map'></div>
        </div>
        <div className='mask-layer'></div>
        <div className='header-container'>
          <Header title='淮河路步行街商圈客流分析大屏'></Header>
        </div>
        <div className='left-container'>
          <MediaAnalyze></MediaAnalyze>
        </div>
        <div className='bottom-container'>
          <div className='left-content'>
            <HistoryPicture></HistoryPicture>
          </div>
          <div className='center-content'>
            <Relation></Relation>
          </div>
          <div className='right-content'>
            <PassengerTred></PassengerTred>
          </div>
        </div>
        <div className='right-container'>
          <Customer></Customer>
        </div>
        <div className='top-center-passenger-container'>
          <PssengerNum></PssengerNum>
        </div>
      </div>
    )
  }
}