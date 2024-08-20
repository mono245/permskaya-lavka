export const images = () => {
    return app.gulp.src(app.path.src.images, {encoding: false})
        .pipe(app.plugins.flatten())
        .pipe(app.plugins.destDependOnMode("images"));
};