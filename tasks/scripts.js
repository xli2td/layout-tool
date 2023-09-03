"use strict";

import gulp from 'gulp'
const { src, dest } = gulp
import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulpIf from "gulp-if";
import rename from "gulp-rename";
import browserSync from "browser-sync";
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import yargs from "yargs";

const webpackConfig = require("../webpack.config.js"),
    argv = yargs.argv,
    production = !!argv.production;

import config from "../gulpfile.config";

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "source-map";

function task() {
    return src(config.scripts.src)
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpIf(production, rename({
            suffix: ".min"
        })))
        .pipe(plumber.stop())
        .pipe(debug({title: 'scripts:'}))
        .pipe(dest(config.scripts.dist))
        .pipe(browserSync.stream());
}

export default task;