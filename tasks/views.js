"use strict";

import gulp from 'gulp'
const { src, dest } = gulp
import yargs from "yargs";
import include from "gulp-file-include";
import gulpIf from "gulp-if";
import replace from "gulp-replace";
import browserSync from "browser-sync";
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

const argv = yargs.argv,
    production = !!argv.production;

import config from "../gulpfile.config";

function task() {
    return src(config.views.src)
        .pipe(plumber())
        .pipe(include({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulpIf(production, replace(".css", ".min.css")))
        .pipe(gulpIf(production, replace(".js", ".min.js")))
        .pipe(plumber.stop())
        .pipe(debug({title: 'views:'}))
        .pipe(dest(config.views.dist))
        .pipe(browserSync.stream());
}

export default task;