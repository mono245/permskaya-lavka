export const images = () => {
    return app.gulp.src(app.path.src.images, {encoding: false})
        .pipe(app.plugins.flatten())
        .pipe(app.plugins.if(app.isDev,
            app.gulp.dest(app.path.dist.build.images),
            app.gulp.dest(app.path.dist.dist.images)
        ));
};