class DOM extends HLib {
  constructor(selector){
    this.selector = selector
    if(selector[0]=="#")
      this.elem = document.getElementById(selector.substr(1))
  }
}
