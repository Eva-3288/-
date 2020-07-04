function getRandomColor(){   //和page没关系的可以放在page外面定义，里面调用的时候直接调用
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return  'rgba(' + r + ',' + g + ',' + b + ',0.8)';
}
Page({
inputValue:'',  
//变量可以写在data里，取值时this.data.变量名 ,赋值：this.setData({变量名：值})  
// 也可以写在data外page里 取值时 this.变量名，赋值：this.变量名 = 值
  /**
   * 页面的初始数据
   */
  data: {
    src:'https://videocdn.taobao.com/oss/ali-video/d074a273a33d259aa269f2880069b181/video.mp4',
    src1:'',
    msgLists:[  //希望弹幕颜色 、字体、时间不同
      { text: '666', color: 'red', time: 1 },
      { text: '沙发沙发', color: 'green', time: 10 },
      { text: 'hello world!!!', color: 'yellow', time: 1 },
    ]
  },
  getVideo(){
    let that = this;
    //点击按钮获取视频，使用微信api
    wx.chooseVideo({   //选择视频
      sourceType:['album','camara'],   //视频源可以来自手机相册 或 相机
      maxDuration: 60 ,//视频选择操作时的视频长度，单位秒
      camara:['front','back'],  //相机可以是前置 或 后置摄像头
      success(res){  //回调函数,会给我们一个参数
        console.log(res.tempFilePath);  //其中res.tempFilePath 是给我们的一个mp4临时路径,我们可以用这个mp4临时路径去播放视频
        that.setData({   //回调函数中的this 会被改变指向，而不是指向page对象，我们可以用let that = this;  先把page对象的地址存起来
          src1: res.tempFilePath
        })
      }
    })

  },

// ----------手写弹幕的弹出-------
  msgBlur(e){

    this.inputValue = e.detail.value;
  },
  sendMsg(){
    // console.log(this.inputValue)
    // console.log(getRandomColor())
    this.videoCtx.sendDanmu({
      text: this.inputValue,
      color:getRandomColor()
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
    // 在page外定义 可以用let 或const ,在page里面要放在this对象上
    this.videoCtx = wx.createVideoContext('videoMsg');   //创建一个video对象，为的时用这个对象上的方法
  },

})