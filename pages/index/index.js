//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // imgUrls: [
    //   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    // ],
    imgUrls: [
      '../../images/b1.jpg',
      '../../images/b2.jpg',
      '../../images/b3.jpg'
    ],
    businessData: [
      { id: 1, url: '../../images/tianp2.jpg', name: '精品甜点美食系列1', price: 10, promotion: true},
      { id: 2, url: '../../images/tianp1.jpg', name: '精品甜点美食系列2', price: 16, promotion: false},
      { id: 3, url: '../../images/tianp4.jpg', name: '精品甜点美食系列3', price: 30, promotion: true}
    ],
    indicatorDots: true, // 轮播图上是否显示当前显示第几张图片的小图标
    autoplay: true, // 是否自动播放
    interval: 5000,
    duration: 1000,
    recommondPic1: '../../images/tianp6.jpg',
    recommondPic2: '../../images/tianp11.jpg'
  },
  onLoad: function() {
    console.log("页面已经加载完毕")
  }
})
