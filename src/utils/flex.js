export default () => {
  var u = navigator.userAgent;
  if (u.indexOf('Windows') > -1) {
    window.onresize = () => {
      document.querySelector('#root').style.transform = `scale(${window.innerWidth / 5764})`
      document.querySelector('#root').style.transformOrigin = `left top 0px`
      document.querySelector('#root').style.width = `5764px`
      document.querySelector('#root').style.height = `1621px`
    }
    document.querySelector('#root').style.transform = `scale(${window.innerWidth / 5764})`
    document.querySelector('#root').style.transformOrigin = `left top 0px`
    document.querySelector('#root').style.width = `5764px`
    document.querySelector('#root').style.height = `1621px`
  } else {
    window.onresize = () => {
      document.querySelector('#root').style.transform = `scale(${window.screen.availWidth / 5764})`
      document.querySelector('#root').style.transformOrigin = `left top 0px`
      document.querySelector('#root').style.width = `5764px`
      document.querySelector('#root').style.height = `1621px`
    }
    document.querySelector('#root').style.transform = `scale(${window.screen.availWidth / 5764})`
    document.querySelector('#root').style.transformOrigin = `left top 0px`
    document.querySelector('#root').style.width = `5764px`
    document.querySelector('#root').style.height = `1621px`
  }
}