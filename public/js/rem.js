function remSize() {
  //获取设备的宽度
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth

  //固定一下宽度。默认设计750. 最大750，最小320
  if(deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if(deviceWidth <= 325) {
    deviceWidth = 325;
  }

  // 设计html的fontsize。750宽度下 1rem = 100px 
  //325宽度下， 1rem = 50px
 document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'

  // 设置字体大小，body的
  document.querySelector('body').style.fontSize = 0.5 + "rem"
  
}
remSize() 

window.onresize = function() {
  //窗口变化操作。设置rem
  remSize()

}