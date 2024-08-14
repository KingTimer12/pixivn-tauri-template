import { Dialogue, NextArea, QuickActions } from "src/components";
import { DialogueInterceptor } from "src/interceptors";

const Game = () => {

  return (
    <NextArea>
      <DialogueInterceptor />
      <Dialogue />
      <QuickActions actions={[
        {
          label: 'Back', 
          onClick: () => {
            console.log("Back")
          }
        },
        {
          label: 'History', 
          onClick: () => {
            console.log("History")
          }
        },
        {
          label: 'Skip', 
          onClick: () => {
            console.log("Skip")
          }
        },
        {
          label: 'Save', 
          onClick: () => {
            console.log("Save")
          }
        },
        {
          label: 'Load', 
          onClick: () => {
            console.log("Load")
          }
        },
        {
          label: 'Quick Save', 
          onClick: () => {
            console.log("Quick Save")
          }
        },
        {
          label: 'Quick Load', 
          onClick: () => {
            console.log("Quick Load")
          }
        },
        {
          label: 'Preferences', 
          onClick: () => {
            console.log("Preferences")
          }
        }
      ]} />
    </NextArea>
  )
}

export { Game };
export default Game;
