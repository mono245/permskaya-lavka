import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: app.isDev})
        .pipe(app.plugins.if(app.isDev,
            app.plugins.rename(app.path.dist.build.js.filename),
            app.plugins.rename(app.path.dist.dist.js.filename)
        ))
        .pipe(webpack({
            mode: app.isDev ? "development" : "production",
            output: {
                filename: "project.js"
            }
        }))
        .pipe(app.plugins.if(app.isDev,
            app.gulp.dest(app.path.dist.build.js.path),
            app.gulp.dest(app.path.dist.dist.js.path)
        ));
};