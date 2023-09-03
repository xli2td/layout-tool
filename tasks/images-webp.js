"use strict";

import gulp from 'gulp'
const { src, dest } = gulp
import newer from "gulp-newer";
import gulpIf from "gulp-if";
import imageminWebp from "imagemin-webp";
import webp from "gulp-webp";
import browserSync from "browser-sync";
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

import config from "../gulpfile.config";


function task() {
    return src(config.images.src)
        .pipe(plumber())
        .pipe(newer(config.images.dist))
        .pipe(webp(gulpIf(production, imageminWebp(config.images.collection.webp))))
        .pipe(plumber.stop())
        .pipe(debug({title: 'images-webp:'}))
        .pipe(dest(config.images.dist))
        .on("end", browserSync.reload);
}

export default task;