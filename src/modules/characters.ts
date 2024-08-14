import { MyCharacter } from "src/extends";
import { saveCharacter } from "@drincs/pixi-vn";

const juliette = new MyCharacter('___pixivn_juliette___', {
    name: 'Juliette',
    age: 25,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4eMoz7DH8l_Q-iCzSc1xyu_C2iryWh2O9_FcDBpY04w&s",
    color: "#ac0086",
    coins: 0
});

saveCharacter(juliette)

export { juliette }