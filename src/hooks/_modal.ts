import { create } from "zustand"

type State = {
  open: string | null
}

type Actions = {
  setOpen: (id: string) => void,
  close: () => void
}

const hook = create<State & Actions>((set) => ({
  open: null,
  setOpen: (id) => set({ open: id }),
  close: () => set({ open: null })
}))

export { hook as useModal }
export default hook