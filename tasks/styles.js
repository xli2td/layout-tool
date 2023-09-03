"use strict";

import gulp from 'gulp'
const { src, dest } = gulp
import sass from 'gulp-dart-sass';
import gulpIf from "gulp-if";
import rename from "gulp-rename";
import minCSS from "gulp-clean-css";
import groupMedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import browserSync from "browser-sync";
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

import config from "../gulpfile.config";

function task() {
    return src(config.styles.src)
        .pipe(plumber())
        .pipe(gulpIf(!production, sourcemaps.init()))
        .pipe(sass())
        .pipe(groupMedia())
        .pipe(gulpIf(production, autoprefixer({
            cascade: false,
            grid: true
        })))
        .pipe(gulpIf(production, minCSS({
            compatibility: "ie8", level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                    removeWhitespace: true
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        })))
        .pipe(gulpIf(production, rename({
            suffix: ".min"
        })))
        .pipe(gulpIf(!production, sourcemaps.write("./maps/")))
        .pipe(plumber.stop())
        .pipe(debug({title: 'styles:'}))
        .pipe(dest(config.styles.dist))
        .on("end", browserSync.reload);
}

export default task;