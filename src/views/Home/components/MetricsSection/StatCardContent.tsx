import { Heading, Flex, Text, useMatchBreakpointsContext } from '@pancakeswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; highlightColor: string }> = ({
  headingText,
  bodyText,
  highlightColor,
}) => {
  const { isMobile, isTablet } = useMatchBreakpointsContext()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split(' ')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '80px']}
      minWidth="180px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '40px']}
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading scale="lg">{remainingWords}</Heading>
      ) : (
        <Heading scale="xl">{remainingWords}</Heading>
      )}
      <Heading color={highlightColor} scale="xl" mb="10px">
        {lastWord}
      </Heading>
      <Text color="textSubtle">{bodyText}</Text>
    </Flex>
  )
}

export default StatCardContent
