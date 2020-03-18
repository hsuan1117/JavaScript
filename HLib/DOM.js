class DOM extends HLib {
  constructor(selector){
    this.selector = selector
    this.elems    = document.querySelectorAll(selector)
  }
}
