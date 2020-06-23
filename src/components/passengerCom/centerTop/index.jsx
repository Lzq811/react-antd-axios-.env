import React, {Component} from 'react'


import './index.less'

export default class Rent extends Component {

  initMap = () => {
    const container = this.refs.mapcontainer
    const buildingLayer = new window.AMap.Buildings({zIndex:130,merge:false,sort:false,zooms:[17,20]});
    const options = {
      hideWithoutStyle:false,//是否隐藏设定区域外的楼块
      areas:[{ //围栏1
        //visible:false,//是否可见
        rejectTexture:true,//是否屏蔽自定义地图的纹理
        color1: 'ff30afff',//楼顶颜色
        color2: 'ff0071b9',//楼面颜色
        lineColor: [48,175,255, 1],
        path: [
          [113.269309,23.128181],
          [113.270108,23.128196],
          [113.270156,23.127111],
          [113.27094,23.127111],
          [113.271315,23.126884],
          [113.27154,23.126686],
          [113.271851,23.12565],
          [113.271964,23.125606],
          [113.272645,23.123312],
          [113.27257,23.123021],
          [113.272645,23.122557],
          [113.272055,23.122325],
          [113.272248,23.1212],
          [113.272973,23.115324],
          [113.263671,23.112216],
          [113.263284,23.114308],
          [113.264985,23.115033],
          [113.265382,23.11567],
          [113.26425,23.117471],
          [113.264422,23.119163],
          [113.264808,23.119459],
          [113.266905,23.120051],
          [113.26601,23.122059],
          [113.265495,23.125359],
          [113.267565,23.125552],
          [113.267571,23.127347],
          [113.269207,23.127431],
          [113.269309,23.128181]
        ]
      }]
    }
    buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle
    const map = new window.AMap.Map(container, {
      zoom: 18,
      zoomEnable: false,
      // zooms: [17, 18],
      dragEnable: false,
      pitch: 60,
      skyColor: '#45B7FE',
      showIndoorMap: false,
      showLabel: false,
      mapStyle: 'amap://styles/ffaca3b000b8fd533368b6ad6a7cc603',
      center: [113.269118,23.11971],
      features: ['bg','point','road'],
      viewMode:'3D',
      buildingAnimation: true,
      layers: [
        new window.AMap.TileLayer({}),
        buildingLayer
      ]
    })
    map.setRotation(24)
    new window.AMap.Polygon({
      bubble:true,
      fillColor:'#0079e7',
      fillOpacity:0.4,
      strokeWeight:1,
      path: options.areas[0].path,
      map: map
    })
  }

  componentDidMount () {
    this.initMap()
  }

  render () {
    return (
      <div className='amap-passenger-wrap'>
        <div ref='mapcontainer' className='map'></div>
        <div className='passenger-num-box'>
          <div className='list-item'>
            <div className='icon-box'>
              <img width='62' height='62' src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-peoples.png' alt='' />
            </div>
            <div className='right-content'>
              <h3>780,000 <span>人</span></h3>
              <h4>当前步行街内到访客流</h4>
            </div>
          </div>
          <div className='list-item'>
            <div className='icon-box'>
            <img width='62' height='62' src='http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/icon-passenger.png' alt='' />
            </div>
            <div className='right-content'>
              <h3>7,780,000 <span>人</span></h3>
              <h4>当月累计到访客流</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}