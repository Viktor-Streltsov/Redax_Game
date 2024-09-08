import React from "react"
import { Button } from "../../../UI"
import { PlayArrow, Pause } from "@mui/icons-material"
import styles from "./Controls.module.css"

interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: (value: boolean) => void
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        endIcon={<PlayArrow />}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        className={styles.button}
      >
        Play
      </Button>
      <Button
        endIcon={<Pause />}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        className={styles.button}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
