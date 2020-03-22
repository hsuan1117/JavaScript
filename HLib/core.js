class HLib {
  constructor(includesPath){
    this.path = includesPath
  }
  startWith(str,x){
    if(str[0] == x) {
      return 1;
    }else{
      return 0;
    }
  }
  endWith(str,x){
    if(str[str.length-1] == x) {
      return 1;
    }else{
      return 0;
    }
  }
}
