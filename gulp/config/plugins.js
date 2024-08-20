import gulpIf from "gulp-if";
import rename from "gulp-rename";
import flatten from "gulp-flatten";
import { destDependOnMode } from "../tools/dest-depend-on-mode.js";

export default {
    if: gulpIf,
    rename: rename,
    flatten: flatten,
    destDependOnMode: destDependOnMode
};