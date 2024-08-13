import terser from "gulp-terser";

export const scripts = () => {
    return app.gulp.src(app.path.src.scripts, {sourcemaps: true})
        .pipe(app.plugins.if(app.isBuild, terser()))
        .pipe(app.plugins.if(app.isDev,
            app.gulp.dest(app.path.dist.build.scripts),
            app.gulp.dest(app.path.dist.dist.scripts)
        ));
};