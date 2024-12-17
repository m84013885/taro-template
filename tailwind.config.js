/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'borderColor': '#EDEDED',
        'inputBgColor': '#F8F8F8',
        'mainColor': '#1477FF',
        'titleColor': '#333333',
        'textColor': '#666666',
        'inputColor': '#999999',
      }
    },
  },
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: true
  }
}

