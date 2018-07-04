// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfoData: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    
  },
  bindGetUserInfo: function (e) {
    // 登录时用户信息授权成功,获取用户基本信息
    console.log(e)
    if (e.detail.userInfo) {
      wx.showToast({
        title: 'loading',
        icon: 'loading',
        duration: 1200
      })
      this.setData({
        userInfoData: e.detail.userInfo
      })
      wx.setStorage({
        key: "userInformation",
        data: e.detail.userInfo.nickName
      })
    }
  }
})
