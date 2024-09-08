import React from "react"
import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../UI"
import TypographyText from "../../../UI/TypographyText"

const Score = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>
      <TypographyText>Errors: {state.totalUnsuccessful}</TypographyText>
      <br />
      <TypographyText>Successful: {state.totalSuccessful}</TypographyText>
    </>
  )
}

export default Score
