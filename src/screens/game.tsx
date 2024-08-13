import { getCharacterById, getDialogueHistory } from "@drincs/pixi-vn";
import { Dialogue } from "src/components";

const Game = () => {
  return (
    <div className="flex flex-col items-center justify-end h-full gap-2 -mt-2">
      {getDialogueHistory()
        .map((dialoge, index) => {
          const character = getCharacterById(dialoge.dialoge?.character ?? "???")
          return <Dialogue key={index} dialogue={dialoge.dialoge?.text ?? ""} characterName={character?.name ?? ""} avatarURL={character?.icon ?? ""} />
        }
      )}
      <div className="bg-white">
        Buttons
      </div>
    </div>
  )
}

export { Game };
export default Game;
