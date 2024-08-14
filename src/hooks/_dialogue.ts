import { MyCharacter } from "src/extends"
import { create } from "zustand"

interface IDialogueModel {
  text?: string,
  character?: MyCharacter,
  hidden?: boolean
}

type State = {
  data: IDialogueModel
}

type Actions = {
  setDialogData: (data: IDialogueModel) => void
}

const hook = create<State & Actions>((set) => ({
  data: { },
  setDialogData: (data) => set({ data })
}))

export { hook as useDialogue }
export default hook