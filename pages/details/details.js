// pages/details/details.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    businessData: [
      {
        imgUrl: '../../images/tianp2.jpg',
        name: '精品甜品系列1',
        desc: '好吃的甜品，你喜欢吗',
        oldPrice: 16,
        newPrice: 10,
      }
    ],
    tabs: ["图文详情", "规格参数", "包装清单", "售后服务"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  // 点击左侧商品分类菜单，显示不同分类的商品信息
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 点击购物车图片，将物品加入购物车
  addToCart: function () {
    wx.showToast({
      title: '已将商品加入购物车',
      icon: 'success',
      success: function (res) {
        // 将添加的商品ID放入一个数组中，然后传给后端，当点击跳转到购物车页面时，通过商品ID来获取加入的商品信息list
      }
    })
  },

  // 点击收藏商品
  collectedGoods: function () {
    this.setData({
      collected: !this.data.collected
    })
  },

  // 查看购物车
  goToCart: function () {
    wx.switchTab({
      url: '../cart/cart'
    })
  }
})