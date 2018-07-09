/**
 * create by lh 
 * date 
 * modify 2018-07-09
 */ 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 暂时模拟的数据
    categroy: [
      { name: '冰淇淋', id: 10011 },
      { name: '布丁', id: 10012 },
      { name: '果汁', id: 10013 },
      { name: '奶茶', id: 10014 },
      { name: '咖啡', id: 10015 },
      { name: '水果', id: 10016 },
      { name: '甜点', id: 10017 }
    ],
    curIndex: 0,
    toViewId: 10011,
    iceCream: [
      {
        imgUrl: '../../images/ice/iceDQ.jpg',
        name: 'DQ冰雪皇后',
        desc: 'DQ 草莓芝士暴风雪',
        price: 24
      },
      {
        imgUrl: '../../images/ice/iceHGDZ.png',
        name: '哈根达斯',
        desc: '期待爱',
        price: 176
      },
      {
        imgUrl: '../../images/ice/iceBx.jpg',
        name: '八喜',
        desc: '八喜冰淇淋90g*18杯牛奶香草巧克力朗姆榴莲冰激凌雪糕',
        price: 168
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    // console.log(_this.data.addressAry.length)
    // 请求服务器数据
    // wx.request({
    //   url: 'http://192.168.1.199', // 请求地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method: 'GET', // 默认值为GET
    //   success: function (res) {
    //     console.log(res.data) // 服务器返回的数据
    //   },
    //   fail: function (errMsg) {
    //     wx.showModal({
    //       title: '请求数据失败',
    //       content: '服务器正忙，请稍后重试',
    //     })
    //   } 
    // })
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
  switchTab(e) {
    this.setData({
      toViewId: e.target.dataset.id,
      curIndex: e.target.dataset.index
    })
    console.log(this.data.toViewId);
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
  }
})
