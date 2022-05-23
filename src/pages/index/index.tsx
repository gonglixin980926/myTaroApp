import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.less'
import animate from  './../../assets/success.svga'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount() {
    console.log(animate);
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={styles.index}>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
