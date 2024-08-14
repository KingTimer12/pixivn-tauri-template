import { create } from "zustand"

type State = {
  value: boolean
}

type Actions = {
  setValue: (value: boolean) => void
}

const hook = create<State & Actions>((set) => ({
  value: false,
  setValue: (value) => set({ value })
}))

export { hook as useNextStep }
export default hook
