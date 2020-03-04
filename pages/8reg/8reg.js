let tel = '';
Page({
  inputTel(event){
    // 输入的方法里会有个参数event,
    tel = event.detail.value;
  },
  submitform:function(){
    console.log(tel);
  }
})