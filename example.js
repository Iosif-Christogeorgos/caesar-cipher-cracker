import { caesar, crackCipher } from "./caesar.js";

const secret = caesar("Meet me at the station at noon.", 7);
console.log("Encrypted:", secret);
console.log("Decrypted:", caesar(secret, -7));
console.log("Cracked:  ", crackCipher(secret));
