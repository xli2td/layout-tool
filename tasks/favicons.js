"use strict";

import gulp from 'gulp'
const { src, dest } = gulp
import favicons from "gulp-favicons";
import config from "../gulpfile.config";
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

function task() {
    return src(config.favicons.src)
        .pipe(plumber())
        .pipe(favicons({icons: config.favicons.icons}))
        .pipe(plumber.stop())
        .pipe(debug({title: 'favicon:'}))
        .pipe(dest(config.favicons.dist));
}

export default task;