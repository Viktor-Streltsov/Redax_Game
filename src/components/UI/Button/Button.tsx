import React from "react"
import cn from "classnames"
import styles from "./Button.module.css"

import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material"

interface IButtonProps extends MaterialButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialButton
      {...props}
      className={cn(styles.button, className)}
      variant="contained"
      size="small"
    >
      {children}
    </MaterialButton>
  )
}

export default Button
