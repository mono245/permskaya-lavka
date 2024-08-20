/**
 * Returns gulp.dest() to a specific folder based on the app.isDev global variable
 * 
 * @param {string} property property of app.path.dist.(dist|build). 
 * @param {boolean | "auto"} addPath should function add '.path' at the end? 
 * Default 'auto', i.e. function will do it automatically, depending on type of app.path.dist.(dist|build)[property]
 * @returns {NodeJS.ReadWriteStream} stream, returned by gulp.dest().
 * 
 * @throws {Error} if either app.isDev and app.isBuild are false or they are undefined.
 */
export const destDependOnMode = (property, addPath = "auto") => {
    let pathOrObj;    

    if (app.isDev) {
        pathOrObj = app.path.dist.build[property];
    } else if (app.isBuild) {
        pathOrObj = app.path.dist.dist[property];
    } else {
        throw new Error("Either app.isDev and app.isBuild are false or they are undefined.");
    }

    // we making addPath === true not just addPath
    // because string 'auto' converted to boolean is true
    if (addPath == "auto" && typeof pathOrObj == "object" || addPath === true) {
        pathOrObj = pathOrObj.path;
    }

    return app.gulp.dest(pathOrObj);
};