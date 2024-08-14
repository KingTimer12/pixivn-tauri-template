import { getCharacterById, getDialogue } from "@drincs/pixi-vn";
import { useEffect } from "react";
import { MyCharacter } from "src/extends";
import { useData, useDialogue, useHideInterface } from "src/hooks";

const DialogueInterceptor = () => {
  const reloadInterfaceDataEvent = useData(s => s.dataEvent);
  const { data: { text, character }, setDialogData } = useDialogue(s => s);
  const hideInterface = useHideInterface(s => s.value);

  useEffect(() => {
    const dialogue = getDialogue();
    const newText = dialogue?.text;
    let newCharacter = undefined;
    if (dialogue) {
      newCharacter = dialogue.character ? getCharacterById<MyCharacter>(dialogue.character) : undefined
      if (!newCharacter && dialogue.character) {
        newCharacter = new MyCharacter(dialogue.character, { name: dialogue.character, coins: 0 })
      }
    }
    
    try {
      if (newText !== text || newCharacter !== character) {
        setDialogData({
          text: newText,
          character: newCharacter,
          hidden: hideInterface || newText === undefined
        })
      }
    } catch (error) {
      console.error(error);
    }

  }, [reloadInterfaceDataEvent])

  return null;
}

export { DialogueInterceptor };
export default DialogueInterceptor;
