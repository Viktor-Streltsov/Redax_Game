import React from "react"
import { MAP_ARROW_CODES } from "../../../../constans"
import { IMapArrowCodes } from "../../../../types"
import { IPlaygroundStepsState } from "../../../../store/types"
import { useAppSelector } from "../../../../../../app/hooks"
import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RendomKeys.module.css"
import cn from "classnames"

const RandomArrows = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    return cn(
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnsuccess,
      stylesCommon.icon,
    )
  }

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
