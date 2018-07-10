// pages/payment/payment.js
/**
 * create by lh 
 * date 2018-07-09
 */ 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: '李红',
      phoneNum: '15185149505',
      address: '贵州省贵阳市观山湖区长岭北路8号美的林城时代南区'
    },
    iceCream: [
      {
        imgUrl: '../../images/ice/iceDQ.jpg',
        name: 'DQ冰雪皇后',
        desc: 'DQ 草莓芝士暴风雪',
        price: 24,
        numbers: 1
      },
      {
        imgUrl: '../../images/ice/iceHGDZ.png',
        name: '哈根达斯',
        desc: '期待爱',
        price: 176,
        numbers: 2
      },
      {
        imgUrl: '../../images/ice/iceBx.jpg',
        name: '八喜',
        desc: '八喜冰淇淋90g*18杯牛奶香草巧克力朗姆榴莲冰激凌雪糕',
        price: 168,
        numbers: 3
      }
    ],
    totalMoney: 158,
    freight: 0
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