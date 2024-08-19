import gulp from "gulp";
import path from "./gulp/config/path.js";
import plugins from "./gulp/config/plugins.js";

globalThis.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),

    gulp: gulp,
    path: path,
    plugins: plugins
}

// importing tasks
import { html } from "./gulp/tasks/html.js";
import { css } from "./gulp/tasks/css.js";
import { js } from "./gulp/tasks/js.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { reset } from "./gulp/tasks/reset.js";

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.scripts, scripts)
}

const mainTasks = gulp.parallel(html, css, js, scripts, images, fonts);

const dev = gulp.series(reset, mainTasks, watcher);
const build = gulp.series(reset, mainTasks);

export { dev, build }

gulp.task("default", dev);