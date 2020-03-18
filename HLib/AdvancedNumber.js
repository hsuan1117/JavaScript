class AdvanceNumber extends HLib {
  get sigma() {
    let _=this.average;
    return Math.sqrt(this.data.reduce((p,c)=>p+=(c-_)*(c-_),0)/this.data.length)
  }
  get average() {
    return this.data.reduce((p,c)=>p+=c,0)/this.data.length
  }
  get sum() {
    return this.data.reduce((p,c)=>p+=c,0)
  }
  get me() {
    /** @依賴: Algorithm **/
    let x = this.data,r=0
    x.sort(Algorithm.less)
    if(x.length%2 == 0){
      r = (x[(x.length-1)/2] + x[x.length/2] ) / 2.0;
    }else{
      r = x[Math.floor(x.length/2)]
    }
    return r;
  }
  constructor(data = [] , settings) {
    super()
    //存放計算的數組
    this.data = data;
  }
}
