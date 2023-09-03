"use strict";

import gulp from 'gulp'
const { src, dest } = gulp
import debug from 'gulp-debug';
import config from "../gulpfile.config";

function task() {
    return src(config.fonts.src)
        .pipe(debug({title: 'fonts:'}))
        .pipe(dest(config.fonts.dist));
}

export default task;