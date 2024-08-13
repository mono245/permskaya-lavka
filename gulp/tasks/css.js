import cleanCss from "gulp-clean-css";

export const css = () => {
    return app.gulp.src(app.path.src.css, {sourcemaps: app.isDev})
        .pipe(app.plugins.if(app.isDev,
            cleanCss({format: "beautify", inline: ["local"]}),
            cleanCss({inline: ["local"]})
        ))
        .pipe(app.plugins.if(app.isDev,
            app.plugins.rename(app.path.dist.build.css.filename),
            app.plugins.rename(app.path.dist.dist.css.filename)
        ))
        .pipe(app.plugins.if(app.isDev,
            app.gulp.dest(app.path.dist.build.css.path),
            app.gulp.dest(app.path.dist.dist.css.path)
        ));
};