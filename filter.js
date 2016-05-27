weatherApp.filter('toDate',function(){
  return function(millisec){
    var dt = new Date(millisec);
    var dtArr = dt.toString().split(' ');
    dt = dtArr[0]+","+dtArr[2] +" "+ dtArr[1] +" "+dtArr[3];
    return dt;
  };
})
.filter('toNumber',function(){
  return function(val){
    return Math.floor(val);
  }
})