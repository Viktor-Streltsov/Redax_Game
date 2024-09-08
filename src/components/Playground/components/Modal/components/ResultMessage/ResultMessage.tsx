import React from "react"
import TypographyText from "../../../../../UI/TypographyText"

interface IResultMessage {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessage> = (props) => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <TypographyText>
      Congratulation <br /> You win
    </TypographyText>
  ) : (
    <TypographyText>
      My regrets. <br /> You have lost this game
    </TypographyText>
  )
}

export default ResultMessage
