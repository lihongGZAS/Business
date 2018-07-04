// pages/addAddress/addAddress.js
/**
 * create by lh
 * date 2018-7-2
 */ 
var compare = /^1[3|4|5|6|8][0-9]\d{4,8}$/;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ["请选择地址"],
    showTopTips: false,
    userName: '',
    userDetailAddress: '',
    userPhoneNum: '',
    commonAddress: false
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
  // 获取收件人姓名
  getUserName: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  // 获取省市区信息
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 获取用户详细收货地址
  getUserDetailAddress: function (e) {
    this.setData({
      userDetailAddress: e.detail.value
    })
  },
  // 获取用户联系电话号码
  getUserPhoneNum: function (e) {
    this.setData({
      userPhoneNum: e.detail.value
    })
  },
  // 是否设置为常用地址
  switchChange: function (e) {
    this.setData({
      commonAddress: e.detail.value
    })
  },
  // 保存用户新增地址信息到数据库
  saveAddress: function () {
    // 存放用户信息的对象
    let userInfoData = {};
    if (this.data.userName === '') {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none',
        image: '',
        duration: 1000
      })
    } else if (this.data.region.length === 1) {
      wx.showToast({
        title: '请选择地址省市区地址信息',
        icon: 'none',
        image: '',
        duration: 1600
      })
    } else if (this.data.userDetailAddress === '') {
      wx.showToast({
        title: '请填写详细收货地址！',
        icon: 'none',
        image: '',
        duration: 1600
      })
    } else if (this.data.userPhoneNum.length === 0){
      wx.showToast({
        title: '手机号码不能为空！',
        icon: 'none',
        image: '',
        duration: 1600
      })
    } else {
      if (!compare.test(this.data.userPhoneNum)) {
        wx.showToast({
          title: '请输入正确的手机号码！',
          icon: 'none',
          image: '',
          duration: 1600
        })
      } else {
        if (this.data.userPhoneNum.length !== 11) {
          wx.showToast({
            title: '输入的手机号码不足11位！',
            icon: 'none',
            image: '',
            duration: 1600
          })
        }else {
          userInfoData = {
            userName: this.data.userName,
            region: this.data.region,
            userDetailAddress: this.data.userDetailAddress,
            userPhoneNum: this.data.userPhoneNum,
            commonAddress: this.data.commonAddress
          }
          console.log(userInfoData)
          let userData = [];
          userData.push(userInfoData);
          // 模拟把添加的用户地址存入数据库中
          wx.setStorage({
            key: 'addUserAddress',
            data: userData,
          })

          // 数据保存后，跳转到地址管理页面
          wx.redirectTo({
            url: '../personAddress/personAddress'
          })
        }
      }
    }
  }
})