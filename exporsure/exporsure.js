  var Exposure = (function(){

  function _Exposure(target, callback){
    this.target = target
    this.callback = callback
    this.checkout()
    this.bind()
  }

  _Exposure.prototype.bind = function (){
    var _this = this
    window.addEventListener('scroll', function (){
      _this.checkout()
    })
  }

  _Exposure.prototype.checkout = function (){
    if (this.isShow(this.target)){
      this.callback(this.target)
    }
  }

  _Exposure.prototype.isShow = function (){
        var windowHeight = window.innerHeight
        var  scrollHeight = document.body.scrollTop
        var  targetTop = this.target.offsetTop
        var nodeHeight = this.target.offsetHeight

      if (windowHeight+scrollHeight>targetTop && scrollHeight<targetTop+nodeHeight){
        return true
      }
      return false
  }

  return {
    init: function (targets, callback){
        Array.prototype.forEach.call(targets, function(target){
          new _Exposure(target, callback)
        })
      }
    }
})()


Exposure.init(document.querySelectorAll('.container li img'), function (node){
  node.src = node.getAttribute('data-src')
})