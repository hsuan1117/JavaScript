class AdvanceNumber extends HLib {
  get sigma() {
    let _=0;
    for(let i=0;i<this.data.length;i++)_+=this.data[i]*this.data[i]
    
  }
  get average() {
    return this.data.reduce((p,c)=>p+c)/this.data.length
  }
  constructor(data = [] , settings) {
    //存放計算的數組
    this.data = data;
    
  }
}
