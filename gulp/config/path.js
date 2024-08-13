import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = "./src";

const distFolder = "./dist";
const productionBuildFolder = `${distFolder}/dist`;
const devBuildFolder = `${distFolder}/build`; 

export default {
    dist: {
        dist: {
            html: `${productionBuildFolder}/`,
            css: {
                path: `${productionBuildFolder}/`,
                filename: "project.css"
            },
            js: {
                path: `${productionBuildFolder}/`,
                filename: "project.js"
            },
            scripts: `${productionBuildFolder}/scripts/`,
            images: `${productionBuildFolder}/img/`
        },
        build: {
            html: `${devBuildFolder}/`,
            css: {
                path: `${devBuildFolder}/`,
                filename: "project.css"
            },
            js: {
                path: `${devBuildFolder}/`,
                filename: "project.js"
            },
            scripts: `${devBuildFolder}/scripts/`,
            images: `${devBuildFolder}/img/`
        }
    },
    src: {
        html: `${srcFolder}/*.html`,
        css: `${srcFolder}/project.css`,
        js: `${srcFolder}/project.js`,
        scripts: `${srcFolder}/common.blocks/*.js`,
        images: `${srcFolder}/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        css: `${srcFolder}/**/*.css`,
        js: `${srcFolder}/**/*.js`,
        scripts: `${srcFolder}/common.blocks/*.js`,
        images: `${srcFolder}/**/*.{jpg,jpeg,png,gif,webp,svg}`
    },

    clean: {
        dist: `${productionBuildFolder}/`,
        build: `${devBuildFolder}/`
    },
    distFolder: distFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
};