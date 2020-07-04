// 每个页面都是一个page对象，

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img1:'https://img11.360buyimg.com/babel/s960x370_jfs/t1/83539/14/13790/245810/5db2e06cEab8e5bd0/b76b8c8927f4aa99.jpg!cc_960x370',
    img2:'https://img12.360buyimg.com/babel/s960x370_jfs/t1/49223/37/16144/136617/5dce7e6fE7dd6138e/d91e1085058aef5f.jpg!cc_960x370',
    img3:'https://img13.360buyimg.com/babel/s960x370_jfs/t1/88382/27/10925/192045/5e240fc8E671f49ac/5c93000e0e62434d.jpg!cc_960x370',
    navArr:[
      { img: '/images/index1.png', title: '乳饮酒水'},
      { img: '/images/index2.png', title: '纸品家清' },
      { img: '/images/index3.png', title: '母婴用品' },
      { img: '/images/index4.png', title: '乳饮酒水' },
      { img: '/images/index5.png', title: '个人护理' },
      { img: '/images/index6.png', title: '方便速食' },
      { img: '/images/index7.png', title: '美容护肤' },
      { img: '/images/index8.png', title: '日用百货' }

    ],
    menu:['首页','今日疯抢','品牌闪购','超市卡','我的'],
    // 列表数据
    goodsLists:[
      { img: '/images/2.jpg', title:'光明纯奶250mL*24盒苗条装新品上新整箱早餐',price:59.9,saleNum:'4万'},
      { img: '/images/2.jpg', title: '光明纯奶250mL*24盒苗条装新品上新整箱早餐', price: 59.9, saleNum: '4万' },
      { img: '/images/2.jpg', title: '光明纯奶250mL*24盒苗条装新品上新整箱早餐', price: 59.9, saleNum: '4万' },
    ]
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})