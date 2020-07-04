const myaudio = wx.createInnerAudioContext();
// 创建升级版对象，之前的wx.createAudioContext是基础版，已经不维护了
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay:false,  //默认不播放
  },
  play(){
    myaudio.play();  //点击播放音频
    this.setData({
      isplay:true   //改变isplay为true  表示正在播放
    })
  },
  stop(){
    myaudio.pause();
    this.setData({
      isplay: false   //改变isplay为true  表示正在播放
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 在页面显示的时候我们把音频加进去
    myaudio.src ='https://s192.xiami.net/34/2100017034/2102856770/1796766405_1505375834586.mp3?ccode=xiami_web_web&expire=86400&duration=197&psid=eb149c7999fafb54f63ce6258f118e95&ups_client_netip=27.189.69.200&ups_ts=1583470615&ups_userid=0&utid=b13eFpaeB2wCARu9RZEfCpio&vid=1796766405&fn=1796766405_1505375834586.mp3&vkey=B99cd68dfa71f71e9a38ac8e9c38a182b';

  },


})