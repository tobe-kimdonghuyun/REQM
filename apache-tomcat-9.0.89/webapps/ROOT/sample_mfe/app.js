import { nexacro, createApp, system, trace } from "./nexacrolib/framework/Framework.js";

createApp(import.meta.url, nexacro, system, trace, "./environment.xml.js" );