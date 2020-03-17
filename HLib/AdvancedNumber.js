class AdvanceNumber extends HLib {
  get sigma() {
    
  }
  get average() {
    return this.data.clone().reduce((p,c)=>p+c)/this.data.length
  }
  constructor(data = [] , settings) {
    //存放計算的數組
    this.data = data;
    
  }
}
