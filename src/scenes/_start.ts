import { newLabel, setDialogue } from "@drincs/pixi-vn";

const LABEL_ID = 'start-label-id'; // or start_label_id

const label = newLabel(LABEL_ID, [
  () => {
    setDialogue({ character: '___pixivn_juliette___', text: 'Hello, world!' })
  }
]);

export { label as startLabel };
export default label;