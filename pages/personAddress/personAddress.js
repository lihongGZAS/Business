// pages/personAddress/personAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressAry: []
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
    wx.getStorage({
      key: 'addUserAddress',
      success: function (res) {
        console.log(res)
        _this.setData({
          addressAry: res.data
        })
        console.log(_this.data.addressAry)
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    // this.setData({
    //   addressAry: [
    //     {address: ''}
    //   ]
    // })
    
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
  addAddress: function () {
    wx.redirectTo({
      url: '../addAddress/addAddress'
    })
  },
  changeAddress: function () {
    wx.redirectTo({
      url: '../changeAddress/changeAddress'
    })
  },
  delateAddress: function () {
    wx.showModal({
      title: '是否删除地址信息',
      content: '',
    })
  }
})