import { create } from "zustand"

type State = {
  dataEvent: boolean
}

type Actions = {
  updateEvents: () => void
}

const hook = create<State & Actions>((set) => ({
  dataEvent: false,
  updateEvents: () => set((state) => ({ dataEvent: !state.dataEvent }))
}))

export { hook as useData }
export default hook