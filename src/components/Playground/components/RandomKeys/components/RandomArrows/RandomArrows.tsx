import React from "react"
import { MAP_ARROW_CODES } from "../../../../constans"
import { IMapArrowCodes } from "../../../../types"
import { IPlaygroundStepsState } from "../../../../store/types"
import styles from "./RendomKeys.module.css"
import { useAppSelector } from "../../../../../../app/hooks"

const RandomArrows = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (elem: IPlaygroundStepsState): string => {
    if (elem.success && elem.success !== null) {
      return styles.iconSuccess
    }

    if (!elem.success && elem.success !== null) {
      return styles.iconUnSuccess
    }

    return styles.icon
  }

  return (
    <>
      {state.steps.map((elem) => (
        <span key={elem.step} className={getStylesRandomKeys(elem)}>
          {MAP_ARROW_CODES[elem.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}

export default RandomArrows
