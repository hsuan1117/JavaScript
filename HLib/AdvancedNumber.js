class AdvanceNumber extends HLib {
  get sigma() {
    let _=this.average;
    this.data.reduce((p,c)=>p+=(c-_)*(c-_))
    
  }
  get average() {
    return this.data.reduce((p,c)=>p+=c)/this.data.length
  }
  constructor(data = [] , settings) {
    //存放計算的數組
    this.data = data;
    
  }
}
