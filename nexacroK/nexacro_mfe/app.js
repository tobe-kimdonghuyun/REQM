import { nexacro, createApp, system, trace } from "http://172.10.12.45:9090/nexacroK/engine/nexacrolib/framework/Framework.js";

createApp(import.meta.url, nexacro, system, trace, "./environment.xml.js" );