import React, { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constans"
import { setEnteredValue } from "../../store/slices"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"

interface IKeysPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeysPressedProps> = (props) => {
  const { isTimerActive } = props
  const dispatch = useAppDispatch()
  const keyPressedElement = useKeyPressedElement()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div>
      <h3>KeyPressedElement</h3>
      <span>{keyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
