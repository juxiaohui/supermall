(function () {
    
  function o() {
      var deviceWidth = document.documentElement.clientWidth;
      if(deviceWidth > 640) deviceWidth = 640;
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  }
  
  var e = null;
  
  window.addEventListener("resize", function () {
      clearTimeout(e), e = setTimeout(o, 300)
  }, !1), o()
  
  //3秒后检查如果html fontSize为0，手动触发计算fontSize。
  setTimeout(function(){
      if(parseInt(document.defaultView.getComputedStyle(document.documentElement).fontSize) == 0){
          o();
      }
  },3000);
  // function o() {
  //     document.documentElement.style.fontSize = (document.documentElement.clientWidth &&document.documentElement.clientWidth < 414 ? document.documentElement.clientWidth : 414) / 12 + "px"
  // }
})(window);