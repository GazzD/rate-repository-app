import React from 'react'
import { View, FlatList } from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item: repository }) => (
        <RepositoryItem {...repository} />
      )}
    />
  )
}

export default RepositoryList
