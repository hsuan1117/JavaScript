class AdvanceNumber extends HLib {
  get sigma() {
    let _=this.average;
    return Math.sqrt(this.data.reduce((p,c)=>p+=(c-_)*(c-_),0)/this.data.length)
  }
  get average() {
    return this.data.reduce((p,c)=>p+=c,0)/this.data.length
  }
  get me() {
    
  }
  constructor(data = [] , settings) {
    super()
    //存放計算的數組
    this.data = data;
    this.data_sorted_s2l = data.sort()
  }
}
