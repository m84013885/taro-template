import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index h-screen w-screen flex justify-center items-center'>
      <Text className='text-red-500 p-[10px] bg-blue-500'>Hello world!</Text>
    </View>
  )
}
