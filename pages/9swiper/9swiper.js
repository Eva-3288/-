// pages/9swiper/9swiper.js
Page({
  // 改变滑块视图swiper的current
  changeCurrent(event){
    // current 发生变化时，这个方法就会触发
    //这是自动触发的，只要轮播图滚动就会触发
    console.log(event.detail.current);
    // 通过event拿到系统对象
    // 轮播图跳转也可以不用navigator标签进行跳转，而在这里获取到点击的页面后用js跳转
  }

})