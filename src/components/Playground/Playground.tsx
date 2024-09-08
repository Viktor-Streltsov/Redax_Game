import React, { useEffect, useState, useRef } from "react"
import { useAppDispatch } from "../../app/hooks"
import { useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import Controls from "./components/Controls"
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "./constans"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score"
import Modal from "./components/Modal"
import Description from "./components/Description"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()
  const [isShowModal, setShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setSuccessEndGame] = useState<boolean>(false)
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
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

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UN_SUCCESS_COUNT

    isSuccessful && setSuccessEndGame(true)
    isUnsuccessful && setSuccessEndGame(false)

    if (isSuccessful || isUnsuccessful) {
      setShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])

  return (
    <>
      <div>
        {state.currentStep}
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      <Description />
      {isShowModal && (
        <Modal
          setShowModal={setShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </>
  )
}

export default Playground
