import { CharacterBaseModel, CharacterBaseModelProps } from "@drincs/pixi-vn";

interface ICharacterModel extends CharacterBaseModelProps {
  coins: number
}

class CharacterModel extends CharacterBaseModel {
  constructor(id: string, props: ICharacterModel) {
    super(id, props)
  }
  
  private _coins: number = 0
  get coins(): number {
    return this.getStorageProperty<number>("coins") || this._coins
  }
  set coins(value: number) {
    this.setStorageProperty<number>("coins", value)
  }
}

export { CharacterModel as MyCharacter }
export default CharacterModel