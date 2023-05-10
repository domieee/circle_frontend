import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function Post() {
  return (
      <View>
          <Image  source={{ uri: 'https//picsum.photos/768' }} />

          <Text>Post</Text>
      </View>
  );


}