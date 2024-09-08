import React from "react"
import TypographyText from "../../../../../UI/TypographyText"
import styles from "./ResultMassage.module.css"

interface IResultMessage {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessage> = (props) => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <TypographyText className={styles.text}>
      Congratulation <br /> You win
    </TypographyText>
  ) : (
    <TypographyText className={styles.text}>
      My regrets. <br /> You have lost this game
    </TypographyText>
  )
}

export default ResultMessage
