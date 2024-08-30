import React, { useEffect, useState, useRef } from "react"
import { useAppDispatch } from "../../app/hooks"
import { useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps } from "./store/slices"
import Controls from "./components/Controls"
import { INTERVAL_TIME } from "./constans"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [isTimerActive, dispatch])

  return (
    <>
      <div>
        {state.currentStep}
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>
      <RandomKeys
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <KeyPressed isTimerActive={isTimerActive} />
    </>
  )
}

export default Playground
