// pages/17event-demo/17event-demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLists:[
      { url: '', txt: '国内新闻' },
      { url: '', txt: '国际新闻' },
      { url: '', txt: '社会新闻' },
      { url: '', txt: '娱乐新闻' },
      { url: '', txt: '国际新闻22' },
      { url: '', txt: '社会新闻22' },
    ],
    swiperRpxHeight:0,  //获取的屏幕高度放在这个变量里
    currentPage:0,  //swiper的current
    navClassArr:[]
  },
  changeSwiper(event){
    console.log(event);
    // ------------点击切换下面的swiper------------
    console.log(event.currentTarget.dataset.index);   //获取当前点击的nav里的哪一项，wxml里通过 data-index传的值
  // swiper 上的current属性决定swiper显示哪个项，current默认是0
    this.setData({    //this指的是当前对象， setData里的对象是data对象
      currentPage: event.currentTarget.dataset.index   //把获取到的项赋值给swiper
    })

    // -------------点击求改菜单的当前类名----------
    let arr = this.data.navClassArr.map((ele,index,self)=>{
      if (index == event.currentTarget.dataset.index){
        return 'navActive';
      }
      return 'navNoActive';
    })
    this.setData({
      navClassArr:arr
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // --------------1.加载进来先获取屏幕的宽高-------------

    let that = this;  //1.在调用微信系统函数前
    // 微信给提供了一个系统api，有一个方法wx.getSystemInfo让我们可以当前屏幕的宽度 / 高度--我们称之为系统参数
    wx.getSystemInfo({
      success: function(res) {
        let {windowHeight,windowWidth} = res;   //获取当前屏幕的宽高,这个高度单位是px 要转成rpx
        let ratio = 750 / windowWidth;  
        // 拿到宽度，要计算出一个比例出来，固定操作
        let rpxHeight = windowHeight * ratio ;   //px的高度乘以比例就是rpx单位的高度
        console.log(windowHeight, rpxHeight)
        that.setData({   //2 . 对data中数据的修改
          swiperRpxHeight: rpxHeight
        })
      },
    })

    // -------------2.给菜单里每一项一个默认class----------

    let arr = this.data.navLists.map((ele,index,self)=>{
      if(index == 0){
        return 'navActive';
      }
      return 'navNoActive';
    })
    this.setData({
      navClassArr: arr    //给菜单里每一项一个默认class:navNoActive
    })

  },


})