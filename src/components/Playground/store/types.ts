export interface IPlaygroundStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  totalSuccessful: number
  totalUnsuccessful: number
  steps: IPlaygroundStepsState[]
}
