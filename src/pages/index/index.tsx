import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button } from '@nutui/nutui-react';
import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index h-screen w-screen flex justify-center items-center'>
      <Text className='text-red-500 p-[10px] bg-blue-500'>Hello world!</Text>
      <Button type='primary'>按钮</Button>
    </View>
  )
}
