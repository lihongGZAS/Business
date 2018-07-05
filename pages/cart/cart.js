// pages/cart/cart.js
/**
 * create by lh 
 * date 2018-07-04
 */ 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartAry: [
      { name: 'DG冰雪皇后冰淇淋蛋糕', id: 11235, price: 168, imgUrl: '../../images/tianp1.jpg', goodsNum: 1, value: '0', checked: false},
      { name: '蓝色暴风雪', id: 11342, price: 36, imgUrl: '../../images/tianp2.jpg', goodsNum: 1, value: '1', checked: true }
    ],
    checkboxItems: [
      {value: '0', checked: false }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("cart")
    let _this = this;
    // console.log(_this.data.addressAry.length)
    // 请求服务器数据
    wx.request({
      url: 'https://www.louiskane.com/set.php', // 请求地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET', // 默认值为GET
      success: function (res) {
        console.log(res) // 服务器返回的数据
      },
      fail: function (errMsg) {
        wx.showModal({
          title: '请求数据失败',
          content: '服务器正忙，请稍后重试',
        })
      } 
    })
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
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.cartAry, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      cartAry: checkboxItems
    });

    // 如果勾选的选项数量刚好为数据的总长度，则让结算栏的全选按钮打钩
    if (e.detail.value.length === this.data.cartAry.length) {
      var checkboxItems = this.data.checkboxItems;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = true;
      }

      this.setData({
        checkboxItems: checkboxItems
      });   
    } else {
      var checkboxItems = this.data.checkboxItems;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;
      }

      this.setData({
        checkboxItems: checkboxItems
      });
    }
  },
  checkAllChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  reduceNum: function (e) {
    
    var index = e.currentTarget.dataset['index'];
    console.log(index);
    // var cartAry = this.data.cartAry;
    // for (var i = 0; i<cartAry.lenght; i++) {
    //   if(index === cartAry[i])
    // }
    // this.data.setData({
    //   // cartAry.goodsNum:
    // })
  },
  addNum: function (e) {
    var index = e.currentTarget.dataset['index'];
    console.log(index);
  },
  goToList: function () {
    wx.switchTab({
      url: '../list/list',
    })
  }
})
