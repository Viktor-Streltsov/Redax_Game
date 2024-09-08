import React from "react"
import TypographyText from "../../../../../UI/TypographyText"
import stylesCommon from "../../RandomKeys.module.css"
import loader from "./img/loader.svg"
import styles from "./WelcomeText.module.css"

interface IWelcomeProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="Loader" />
        </span>
      </div>
    )
  }

  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelcomeText
