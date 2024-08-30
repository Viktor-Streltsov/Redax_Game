import React from "react"
import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constans"
import { IMapArrowCodes } from "../../types"

interface IRandomKeysProps {
  isTimerActive: boolean
  setIsTimerActive: (value: boolean) => void
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      {state.steps.map((elem) => (
        <span key={elem.step}>
          {MAP_ARROW_CODES[elem.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomKeys
