import React from "react"
import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import { Button } from "../../../UI"
import { Modal as MaterialModal } from "@mui/material"
import cn from "classnames"
import styles from "./Madal.module.css"

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
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button onClick={handleClose} className={styles.button}>
          Start New Game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
