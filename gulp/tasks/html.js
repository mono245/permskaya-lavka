import fileinclude from "gulp-file-include";
import htmlMin from "gulp-htmlmin"
import replace from "gulp-replace";

export const html = () => {
    const imgPathRegExp = /([\w\.-]+?\.blocks\/([\w\.-]+\/)?)(?=.*\.(svg|webp|jpg|jpeg|png|ico|gif))/g;
    const jsPathRegExp = /([\w\.-]+?\.blocks\/([\w\.-]+\/)?)(?=.*\.js)/g;
    const typeModuleRegExp = /(?<=<script (.* )?)type\s*=\s*['"]?module['"]?/g;

    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(replace(imgPathRegExp, "img/"))
        .pipe(replace(jsPathRegExp, "scripts/"))
        .pipe(replace(typeModuleRegExp, ""))
        .pipe(app.plugins.if(app.isBuild,
            htmlMin({
                collapseWhitespace: true,
                removeComments: true
            })
        ))
        .pipe(app.plugins.if(app.isDev,
            app.gulp.dest(app.path.dist.build.html),
            app.gulp.dest(app.path.dist.dist.html)
        ));
};