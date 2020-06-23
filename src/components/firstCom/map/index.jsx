import React, {Component} from 'react'

import { Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import './index.less'

export default class Map extends Component {

  state = {
    visible: false,
    dialogData: [
      {
        type: '30家知名老字号',
        data: [
          {
            image: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/first-text-image.png',
            title: '银记肠粉',
            desc: '广州比较出名的一家肠粉店，肠粉味道地道，口感嫩滑，而且款式比较多，各种口味都有'
          },
          {
            image: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/first-text-image.png',
            title: '仁信老铺',
            desc: '双皮奶是最正宗的。奶味很浓，很香，口感顺滑。红豆姜汁双皮奶，味道非常浓郁。'
          },
          {
            image: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/first-text-image.png',
            title: '苏记美食',
            desc: '北京路的老字号，牛杂超级入味，每一块萝卜口感都很好，是广州人最爱吃的美食之一。'
          },
          {
            image: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/first-text-image.png',
            title: '西关婆婆面',
            desc: '镇店之作云吞面招牌云吞面与一般的银丝面不同，面条是扁平状，比较宽和粗，这是“婆婆面”的特色。'
          },
          {
            image: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/first-text-image.png',
            title: '佳叔汤丸王',
            desc: '问起老广州，哪里的汤丸店有印象，许多人会说是“佳叔”，铺面小却人气旺。'
          },
          {
            image: 'http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/first-text-image.png',
            title: '美嘉华',
            desc: '美嘉华是北京路老字号的面包店了，价格非常地实惠，最重要的是那里满满的都是童年的记忆。'
          }
        ]
      }
    ],
    currentDialogData: [],
    currentDialogDataTitle: ''
  }

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
    map.setRotation(-42)
    new window.AMap.Polygon({
      bubble:true,
      fillColor:'#0079e7',
      fillOpacity:0.4,
      strokeWeight:1,
      path: options.areas[0].path,
      map: map
    })
    this.markList(map)
    this.polyLineList(map)
  }
  markList = (map) => {
    // let that = this
    const style = {
      'background-image': 'url(http://big-screen.oss-cn-shenzhen.aliyuncs.com/beijingRoad/building-icon.png)',
      'background-size': '100% 100%',
      'background-repeat': 'no-repeat',
      'background-color': 'rgba(0, 0, 0, 0)',
      'color': 'white',
      'font-size': '36px',
      'height': '120px',
      'line-height': '70px',
      'border': 'none',
      'z-index': '100',
      'padding': '16px 30px'
    }
    const posList = [
      {text: '9大商业综合体', pos:  [113.269099,23.121085]},
      {text: '3000家营业商铺', pos:  [113.269134,23.12406]},
      {text: '4A旅游景区', pos:  [113.26967,23.126231]},
      {text: '年到访游客99万', pos:  [113.266688,23.124218]},
      {text: '30家知名老字号', pos:  [113.26628,23.118258]},
      {text: '6大千年古迹', pos:  [113.267761,23.115002]},
      {text: '22处文物点', pos:  [113.272331,23.11664]}
    ]
    let textMarkers = []
    posList.forEach(item => {
      textMarkers.push(
        new window.AMap.Text({
          text: item.text,
          zIndex: 1000,
          visible: true,
          position: item.pos,
          offset: new window.AMap.Pixel(0, 0),
          style: style,
          cursor: 'pointer',
          clickable: true,
          topWhenClick: true
        })
      )
    })
    map.add(textMarkers)
    textMarkers.forEach(item => {
      item.on('click', (e) => {
        this.showDialog(e.target.w.text)
      })
    })
  }

  polyLineList = (map) => {
    const posList = [
      [113.263358,23.114217], [113.265718,23.115342], [113.267478,23.117335], [113.26986,23.118598],
      [113.269173,23.12075], [113.271083,23.121993], [113.269581,23.126472], [113.267671,23.125229],
      [113.267757,23.123039], [113.267778,23.121223]
    ]
    const Icon = new window.AMap.Icon({
      map: map,
      size: [0,0],
      image: 'https://webapi.amap.com/images/car.png'
    })
    const marker = new window.AMap.Marker({
      map: map,
      position: posList[0],
      icon: Icon,
      // offset: new window.AMap.Pixel(-26, -13),
      // autoRotation: true,
      // angle:-90
    })
    const passedPolyline = new window.AMap.Polyline({
      map: map,
      // path: lineArr,
      strokeColor: "#AF5",  //线颜色
      strokeOpacity: 1,     //线透明度
      strokeWeight: 6,      //线宽
      // strokeStyle: "solid"  //线样式
    })
    map.add(marker)
    map.setFitView()
    setTimeout(() => {
      marker.moveAlong(posList, 800, k => k, true)
    }, 2000)
    marker.on('moving', function (e) {
      passedPolyline.setPath(e.passedPath)
    })
  }

  showDialog = (text) => {
    const {dialogData} = this.state
    this.setState({currentDialogData: [], currentDialogDataTitle: text})
    dialogData.forEach(item => {
      if (item.type === text) {
        this.setState({currentDialogData: item.data})
      }
    })
    this.showModal()
    console.log('currentData', this.state.currentDialogData)
  }

  showModal = () => {
    this.setState({visible: true})
  }

  handleCancel = () => {
    this.setState({visible: false})
  }

  componentDidMount () {
    this.initMap()
  }
  render () {
    const {currentDialogDataTitle, currentDialogData, visible} = this.state
    return (
      <div className='map-wrap'>
        <div ref='mapcontainer' className='map'></div>
        <Modal
          title={currentDialogDataTitle}
          visible={visible}
          onCancel={this.handleCancel}
          centered={true}
          footer={null}
          closeIcon={<CloseOutlined style={{fontSize: '20px', color: '#02CDFF'}}/>}
          style={{background: '#000'}}
          width={1000}
          bodyStyle={{background: '#000'}}
        >
          <div className='first-modal-content'>
          {
            currentDialogData.map(item => (
              <div className='list-item' key={item.title}>
                <div className='left-image'>
                  <img width='130' height='130' src={item.image} alt='' />
                </div>
                <div className='right-content'>
                  <h3>{item.title}</h3>
                  <h4>{item.desc}</h4>
                </div>
              </div>
            ))
          }
          </div>
        </Modal>
      </div>
    )
  }
}