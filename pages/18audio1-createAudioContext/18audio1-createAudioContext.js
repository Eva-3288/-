Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '此时此刻',
    author: '许巍',
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    src: 'https://s192.xiami.net/34/2100017034/2102856770/1796766405_1505375834586.mp3?ccode=xiami_web_web&expire=86400&duration=197&psid=eb149c7999fafb54f63ce6258f118e95&ups_client_netip=27.189.69.200&ups_ts=1583470615&ups_userid=0&utid=b13eFpaeB2wCARu9RZEfCpio&vid=1796766405&fn=1796766405_1505375834586.mp3&vkey=B99cd68dfa71f71e9a38ac8e9c38a182b'

  },
  audioPlay() {
    this.audioCtx.play();  //播放音频
  },
  audioPause() {
    this.audioCtx.pause();   //暂停音频
  },
  audio5s() {
    this.audioCtx.seek(5);   //跳转到5s开始播放
  },
  audioToBegin() {
    this.audioCtx.seek(0);    //返回到0s开始播放
  },
  // audio封面及资源路径必须是线上的资源，不能是本地的
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 要控制音频的操作，我们要用到
    // 在页面渲染完之后，要先渲染音频标签，创建一个音频对象
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },

})