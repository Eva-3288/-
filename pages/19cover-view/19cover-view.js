// pages/19cover-view/19cover-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay:false
  },
  play(){
    this.videoCtx.play();
    this.setData({
      isplay:true
    })
  },
  stop(){
    this.videoCtx.stop();
    this.setData({
      isplay: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoCtx = wx.createVideoContext('myVideo')
  },

})