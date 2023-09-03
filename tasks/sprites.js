"use strict";

import gulp from 'gulp'
const { src, dest } = gulp;
import svg from "gulp-svg-sprite";
import browserSync from "browser-sync";
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

import config from "../gulpfile.config";

function task() {
    return src(config.sprites.src)
        .pipe(plumber())
        .pipe(svg({
            shape: {
                dest: "intermediate-svg"
            },
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(plumber.stop())
        .pipe(debug({title: 'sprites:'}))
        .pipe(dest(config.sprites.dist))
        .on("end", browserSync.reload);
}

export default task;