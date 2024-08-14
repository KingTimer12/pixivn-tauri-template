import { create } from "zustand"

type State = {
  dataEvent: number
}

type Actions = {
  setDataEvent: (value: number) => void
}

const hook = create<State & Actions>((set) => ({
  dataEvent: 0,
  setDataEvent: (dataEvent) => set({ dataEvent })
}))

export { hook as useData }
export default hook