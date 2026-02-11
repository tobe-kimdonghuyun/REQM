// test-toon.mjs
// 실행: node test-toon.mjs
import fs from "node:fs";
import { encode, decode } from "@toon-format/toon";

const json = JSON.parse(fs.readFileSync("./sample.json", "utf8"));
const toon = fs.readFileSync("./sample.toon", "utf8");

console.log("=== 1) JSON -> TOON (encode) ===");
const encoded = encode(json);
console.log(encoded);

console.log("\n=== 2) TOON -> JSON (decode) ===");
const decoded = decode(toon);
console.log(JSON.stringify(decoded, null, 2));

console.log("\n=== 3) Round-trip 검증 ===");
const rt = decode(encode(json));
console.log("roundTripEqual:", JSON.stringify(rt) === JSON.stringify(json));
