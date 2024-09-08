import React from "react"
import TypographyText from "../../../../../UI/TypographyText"

interface IWelcomeProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <span>Loading...</span>
  }

  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelcomeText
