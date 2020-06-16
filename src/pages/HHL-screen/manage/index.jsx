import React, {Component} from 'react'

import Header from '../../../components/hhl-common/header'
import Tree from '../../../components/hhl-common/manage-component/tree'
import RightWrap from '../../../components/hhl-common/manage-component/right-items'
import TopCenter from '../../../components/hhl-common/manage-component/top-center'

import './index.less'

export default class Manage extends Component {

  state = {
    map: null,
  }

  initMap = () => {
    const container = this.refs.mapcontainer
    const buildingLayer = new window.AMap.Buildings({zIndex:130,merge:false,sort:false,zooms:[17,20]});
    const options = {
      hideWithoutStyle: false,//是否隐藏设定区域外的楼块
      areas: [
        { //围栏1
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff0D324F',//楼顶颜色
          color2: 'ff041725',//楼面颜色
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
        },
        { //围栏 红太阳购物中心
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff30afff',//楼顶颜色
          color2: 'ff0071b9',//楼面颜色
          lineColor: [48,175,255, 1],
          path: [
            [117.289154,31.862856],
            [117.287384,31.86312],
            [117.287706,31.864806],
            [117.289433,31.864369],
            [117.289154,31.862856]
          ]
        },
        { //围栏 天徽大厦
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff30afff',//楼顶颜色
          color2: 'ff0071b9',//楼面颜色
          lineColor: [48,175,255, 1],
          path: [
            [117.285254,31.863585],
            [117.28726,31.863594],
            [117.287024,31.861667],
            [117.285125,31.861849],
            [117.285254,31.863585]
          ]
        },
        { //围栏 太阳城
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff30afff',//楼顶颜色
          color2: 'ff0071b9',//楼面颜色
          lineColor: [48,175,255, 1],
          path: [
            [117.289186,31.862729],
            [117.290045,31.862637],
            [117.290028,31.861726],
            [117.289111,31.861658],
            [117.289074,31.862118],
            [117.289186,31.862729]
          ]
        },
        { //围栏 银泰中心
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff30afff',//楼顶颜色
          color2: 'ff0071b9',//楼面颜色
          lineColor: [48,175,255, 1],
          path: [
            [117.291117,31.863016],
            [117.291386,31.86323],
            [117.292877,31.863243],
            [117.292952,31.862209],
            [117.291155,31.861977],
            [117.291117,31.863016]
          ]
        },
        { //围栏 豪情商务宾馆
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff30afff',//楼顶颜色
          color2: 'ff0071b9',//楼面颜色
          lineColor: [48,175,255, 1],
          path: [
            [117.295801,31.863517],
            [117.295865,31.863758],
            [117.297142,31.863553],
            [117.297018,31.862774],
            [117.295704,31.862801],
            [117.295801,31.863517]
          ]
        },
        { //围栏 中房名城
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff30afff',//楼顶颜色
          color2: 'ff0071b9',//楼面颜色
          lineColor: [48,175,255, 1],
          path: [
            [117.29888,31.863161],
            [117.298274,31.863234],
            [117.298091,31.863357],
            [117.298123,31.863494],
            [117.29822,31.863603],
            [117.298376,31.863649],
            [117.298719,31.863653],
            [117.298923,31.863599],
            [117.29888,31.863161]
          ]
        },
        { //围栏 尚接时尚购物广场
          //visible:false,//是否可见
          rejectTexture:true,//是否屏蔽自定义地图的纹理
          color1: 'ff30afff',//楼顶颜色
          color2: 'ff0071b9',//楼面颜色
          lineColor: [48,175,255, 1],
          path: [
            [117.292791,31.864232],
            [117.293746,31.864569],
            [117.293542,31.865225],
            [117.2927,31.865307],
            [117.292668,31.864934],
            [117.292791,31.864232]
          ]
        }
    ]
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
      center: [117.292198, 31.8645],
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
    const marker = new window.AMap.Marker({
      icon: "http://big-screen.oss-cn-shenzhen.aliyuncs.com/HuaiHeRoad/current-arrow.png",
      position: map.getCenter(),
      offset: new window.AMap.Pixel(120, -300)
    })
    map.add(marker)
    marker.setAnimation('AMAP_ANIMATION_BOUNCE')
    this.setState({map: map})
  }

  flyBall = () => {
    console.log('flyball')
    const {map} = this.state
    const markerEle = this.refs.marker
    const marker = new window.AMap.Marker({
      content: markerEle,
      position: [117.293319,31.864425],
      offset: new window.AMap.Pixel(0, 0)
    })
    map.add(marker)
    const markerEle2 = this.refs.marker2
    const marker2 = new window.AMap.Marker({
      content: markerEle2,
      position: [117.291309,31.865425],
      offset: new window.AMap.Pixel(0, 0)
    })
    map.add(marker2)
    markerEle.style.opacity = 1
    markerEle2.style.opacity = 1
    let timer = setInterval(() => {
      markerEle.style.top = parseInt(markerEle.style.top) - 5 + 'px'
      markerEle.style.opacity -= 0.01
      if (markerEle.style.opacity < 0) {
        map.remove(marker)
        markerEle.style.top = '-10px'
        markerEle.style.opacity = 1
      }
      markerEle2.style.top = parseInt(markerEle2.style.top) - 5 + 'px'
      markerEle2.style.opacity -= 0.01
      if (markerEle2.style.opacity < 0) {
        clearInterval(timer)
        map.remove(marker2)
        markerEle2.style.top = '-10px'
        markerEle2.style.opacity = 1
      }
    }, 20)
  }

  componentDidMount () {
    this.initMap()
    setInterval(() => {
      this.flyBall()
    }, 8000)
  }

  render () {

    return (
      <div className="manage-screen">
        <div className='map-container'>
          <div ref='mapcontainer' className='map'></div>
          <div className='custom-marker' ref='marker' style={{top: '-10px', right: '-10px', opacity: 0}}>
            <div className='fly-ball'>123</div>
          </div>
          <div className='custom-marker' ref='marker2' style={{top: '-10px', right: '-10px', opacity: 0}}>
            <div className='fly-ball'>346</div>
          </div>
        </div>
        <div className='mask-layer'></div>
        <div className='top-container'>
          <TopCenter></TopCenter>
        </div>
        <div className='header-container'>
          <Header title='淮河路步行街经营分析大屏'></Header>
        </div>
        <div className='left-graph-container'>
          <Tree></Tree>
        </div>
        <div className='right-chart-container'>
          <RightWrap></RightWrap>
        </div>
      </div>
    )
  }
}