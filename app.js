//app.js
App({
  onLaunch: function () {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    // 获取当前时间戳
    var timestamp = Data.now()
    // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
    logs.unshift(timestamp)
    // 调用API，将数据进行本地缓存
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    ip:"http://"+"192.168.1.153"+":8022"
  }
})