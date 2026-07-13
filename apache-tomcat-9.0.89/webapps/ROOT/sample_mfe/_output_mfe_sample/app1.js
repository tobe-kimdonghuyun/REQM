import { nexacro, system, trace, createApp } from "http://localhost:8000/nexacrolib/framework/Framework.js";

createApp(import.meta.url, nexacro, system, trace, "./environment1.xml.js" );