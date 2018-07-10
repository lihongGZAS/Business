// pages/indent/indent.js
/**
 * create by lh 
 * date 2018-07-10
 */ 
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["全部订单", "待支付", "待收货", "已完成"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    iceCream: [
      {
        imgUrl: '../../images/ice/iceDQ.jpg',
        name: 'DQ冰雪皇后',
        desc: 'DQ 草莓芝士暴风雪',
        price: 24,
        numbers: 1,
        paymentNum: 'QY123908354',
        paymentStatus: "订单成立",
        payMoney: 24
      },
      {
        imgUrl: '../../images/ice/iceHGDZ.png',
        name: '哈根达斯',
        desc: '期待爱',
        price: 176,
        numbers: 2,
        paymentNum: 'QY123903522',
        paymentStatus: "订单成立",
        payMoney: 352
      },
      {
        imgUrl: '../../images/ice/iceBx.jpg',
        name: '八喜',
        desc: '八喜冰淇淋90g*18杯牛奶香草巧克力朗姆榴莲冰激凌雪糕',
        price: 168,
        numbers: 3,
        paymentNum: 'QY144323464',
        paymentStatus: "订单取消",
        payMoney: 504
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 显示信息加载loading动画，等待数据请求加载
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 1000
    })
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
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
  
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  delateIndent: function () {
    // wx.showLoading({
    //   title: 'loading',
      
    // })
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 800
    })
  }
})