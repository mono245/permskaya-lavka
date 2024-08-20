export const fonts = () => {
    return app.gulp.src(app.path.src.fonts, {encoding: false})
        .pipe(app.plugins.flatten())
        .pipe(app.plugins.destDependOnMode("fonts"));
};