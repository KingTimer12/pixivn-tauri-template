import { DialogueBaseModel, StorageElementType } from "@drincs/pixi-vn";
import { MyCharacter } from "./_character";

class DialogueModel extends DialogueBaseModel {
  constructor(character: MyCharacter, text: string, emotion: { [key: string]: string } = {}) {
    super(text, character)
    this.oltherParams = { emotion }
  }

  oltherParams: {
    [key: string]: StorageElementType, emotion: { [key: string]: string }
  }

  get emotion() {
    return this.oltherParams.emotion
  }
}

export { DialogueModel as MyDialogue };
export default DialogueModel
