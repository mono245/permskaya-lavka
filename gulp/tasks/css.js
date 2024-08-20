import cleanCss from "gulp-clean-css";
import autoPrefixer from "gulp-autoprefixer";

export const css = () => {
    return app.gulp.src(app.path.src.css, {sourcemaps: app.isDev})
        .pipe(app.plugins.if(app.isBuild,
            autoPrefixer({
                cascade: false,
                add: true,
                remove: true,
                grid: "no-autoplace"
            })
        ))
        .pipe(app.plugins.if(app.isDev,
            cleanCss({format: "beautify", inline: ["all"]}),
            cleanCss({inline: ["all"]})
        ))
        .pipe(app.plugins.if(app.isDev,
            app.plugins.rename(app.path.dist.build.css.filename),
            app.plugins.rename(app.path.dist.dist.css.filename)
        ))
        .pipe(app.plugins.destDependOnMode("css"));
};