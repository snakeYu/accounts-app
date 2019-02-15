// 毫秒数转地区日期，符号为-
function localDate(time){
  return new Date(time).toLocaleDateString().split('/').join('-');
}

export {localDate}