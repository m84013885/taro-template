module.exports = {
  plugins: {
    tailwindcss: {},
    // 下方为 px 转 rpx 区域
    'postcss-pxtransform': {
      platform: process.env.TARO_ENV || 'weapp',
      designWidth: 375, // 可以设置为 375 等等来应用下方的规则,
      deviceRatio: {
        640: 2.34 / 2,
        // 此时应用到的规则，代表 1px = 1rpx
        750: 1,
        828: 1.81 / 2,
        // 假如你把 designWidth 设置成 375 则使用这条规则 1px = 2rpx
        375: 2 / 1,
      },
    },
  }
}