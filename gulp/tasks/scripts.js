import terser from "gulp-terser";

export const scripts = () => {
    return app.gulp.src(app.path.src.scripts, {sourcemaps: true})
        .pipe(app.plugins.if(app.isBuild, terser()))
        .pipe(app.plugins.destDependOnMode("scripts"));
};