(function(){
  let _ = console.log;
  console.log = function(proj,msg){

    if(typeof msg != "undefined"){
      _("["+proj+"]: "+msg)

    }else{
      _("[Not Set]: "+proj)

    }
  }
})()
