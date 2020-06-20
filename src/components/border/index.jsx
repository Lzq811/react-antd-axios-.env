/* 通用背景边框 */
/* <Border width={710总宽度} height={688总高度} lineList={lineList线条的数量} size={16标题的字号}></Border> */

import React from 'react'

import './index.less'

function Border (props) {
  const {width, height, lineList, title, unit, size} = props
  return (
    <div className='border-wrap' style={{width: width + 'px', height: height + 'px'}}>
      <div className='top-box'>
        <div className='line left'>
          <div className='op-line'></div>
          <div className='sq-border'></div>
        </div>
        <div className='center modal-title' style={{fontSize: size + 'px'}}>
          {title}<span className='unit'>{unit}</span>
        </div>
        <div className='line right'>
          <div className='op-line'></div>
          <div className='sq-border'></div>
        </div>
      </div>
      <div className='content-box' style={{width: (width - 14) + 'px', height: (height - 66) + 'px'}}>
        <div className='line-box'>
          {
            lineList.map((item, index) => (
              <div className='hor-line' key={item} style={{top: (index * 40) + 'px'}}></div>
            ))
          }
          {
            lineList.map((item, index) => (
              <div className='v-line' key={item} style={{left: (index * 40) + 'px'}}></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Border