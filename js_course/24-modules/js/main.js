// import playGuitar from "./guitars.js";
// import { schredding as schred, plucking as fingerpicking} from "./guitars.js";
import * as Guitars from "./guitars.js";
import User from "./user.js"

const me = new User("email@email.com", "gokay")
console.log(me);
console.log(me.greeting());



console.log(Guitars.default());
console.log(Guitars.schredding());
console.log(Guitars.plucking());






