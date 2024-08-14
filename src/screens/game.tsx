import { Dialogue, NextArea } from "src/components";
import { DialogueInterceptor } from "src/interceptors";

const Game = () => {

  return (
    <NextArea>
      <DialogueInterceptor />
      <Dialogue />
      <div className="bg-white">
        Buttons
      </div>
    </NextArea>
  )
}

export { Game };
export default Game;
