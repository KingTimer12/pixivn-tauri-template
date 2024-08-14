import { newLabel, setDialogue } from "@drincs/pixi-vn";
import { juliette } from "src/modules/characters";

const LABEL_ID = 'start-label-id'; // or start_label_id

const label = newLabel(LABEL_ID, 
  [
    () => setDialogue({ character: juliette, text: 'Hello, world!' }),
    (props) => setDialogue({ character: juliette, text: 'I have ' + props.age + ' years old.' }),
    (props) => setDialogue({ character: juliette, text: 'And ' + props.coins + ' coins.' }),
  ]
);

export { label as startLabel };
export default label;