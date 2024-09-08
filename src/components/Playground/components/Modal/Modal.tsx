import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import { Button } from "../../../UI"

interface IModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const dispatch = useAppDispatch()
  const { setShowModal, isSuccessEndGame } = props

  const handleClose = () => {
    dispatch(resetStore())
    setShowModal(false)
  }

  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <Button onClick={handleClose}>Start new Game</Button>
    </div>
  )
}

export default Modal
