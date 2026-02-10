import { nexacro, createApp } from "./nexacrolib/framework/Framework.mjs";
import "./nexacrolib/component/CompBase.mjs";
import "./nexacrolib/component/ComComp.mjs";
import "./nexacrolib/component/Grid.mjs";
import "./nexacrolib/component/ListView.mjs";
import "./nexacrolib/component/DeviceAPI.mjs";
import "./nexacrolib/component/MobileComp.mjs";
import "./environment.xml.mjs";

createApp(import.meta.url, nexacro);