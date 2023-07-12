import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'

const parseThousands = (number) => {
  if (number < 1000) {
    return number
  }
  return `${(number / 1000).toFixed(1)}k`
}

const RepositoryStats = props => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <View>
      <StyledText fontWeight='bold'>Stars</StyledText>
      <StyledText>{parseThousands(props.stargazersCount)}</StyledText>
    </View>
    <View>
      <StyledText fontWeight='bold'>Forks</StyledText>
      <StyledText>{parseThousands(props.forksCount)}</StyledText>
    </View>
    <View>
      <StyledText fontWeight='bold'>Reviews</StyledText>
      <StyledText>{props.reviewCount}</StyledText>
    </View>
    <View>
      <StyledText fontWeight='bold'>Rating</StyledText>
      <StyledText>{props.ratingAverage}</StyledText>
    </View>
  </View>
)

export default RepositoryStats
