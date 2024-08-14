import { CharacterBaseModel, CharacterBaseModelProps } from "@drincs/pixi-vn";

interface ICharacterModel extends CharacterBaseModelProps {
  coins: number
}

class CharacterModel extends CharacterBaseModel {
  [key: string]: any;
  
  constructor(id: string, props: ICharacterModel) {
    super(id, props)
    this.defaultCoins = props.coins
  }
  
  private defaultCoins: number = 0
  get coins(): number {
    return this.getStorageProperty<number>("coins") || this.defaultCoins
  }
  set coins(value: number) {
    this.setStorageProperty<number>("coins", value)
  }
}

export { CharacterModel as MyCharacter }
export default CharacterModel