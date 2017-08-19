var Tab = (function (){

  function _Tab(ct){
    this.ct = ct
    this.init()
    this.bind()
  }

  _Tab.prototype.init = function (){
    console.log(this)
    this.tabLis = this.ct.getElementsByClassName('tabs')[0].getElementsByTagName('li')
    this.tabPanels = this.ct.getElementsByClassName('contents')[0].getElementsByTagName('li')
  }

  _Tab.prototype.bind = function (){
    var _this = this
    var tabLength = this.tabLis.length
    for (var i=0; i<tabLength; i++){
      this.tabLis[i].index = i
      this.tabLis[i].onclick = function (){
        for (var j=0; j<tabLength; j++){
          _this.tabLis[j].classList.remove('active')
          _this.tabPanels[j].classList.remove('show')
        }
        this.classList.add('active')
        _this.tabPanels[this.index].classList.add('show')
      }
    }
  }

  return {
    init: function (cts){
      for (var i=0; i<cts.length; i++){
        new _Tab(cts[i])
      }
    }
  }
})()

Tab.init(document.getElementsByClassName('container'))