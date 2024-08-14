import { MyCharacter } from "src/extends";
import { saveCharacter } from "@drincs/pixi-vn";

const juliette = new MyCharacter('___pixivn_juliette___', {
    name: 'Ju',
    age: 19,
    icon: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fcharacters%2Fjuliette-square.webp?alt=media",
    color: "#ac0086",
    coins: 100
});

saveCharacter(juliette);

export { juliette }