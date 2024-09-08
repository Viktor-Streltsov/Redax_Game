import playgroundReducer, {
  initialState,
  setCurrentStep,
  resetStore,
} from "../slices"

describe("reducer resetStore", () => {
  it("check resetStore", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const resetStoreSate = playgroundReducer(setCurrentStepState, resetStore())

    expect(resetStoreSate).toEqual(initialState)
  })
})
