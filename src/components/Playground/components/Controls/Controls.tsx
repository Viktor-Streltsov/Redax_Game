import React from "react"

interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: (value: boolean) => void
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <button onClick={() => setIsTimerActive(true)} disabled={isTimerActive}>
        Play
      </button>
      <button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive}>
        Pause
      </button>
    </div>
  )
}

export default Controls
