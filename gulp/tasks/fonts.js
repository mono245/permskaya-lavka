export const fonts = () => {
    return app.gulp.src(app.path.src.fonts, {encoding: false})
        .pipe(app.plugins.flatten())
        .pipe(app.plugins.if(app.isDev,
            app.gulp.dest(app.path.dist.build.fonts),
            app.gulp.dest(app.path.dist.dist.fonts)
        ));
};