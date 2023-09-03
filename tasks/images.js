"use strict";

import gulp from 'gulp'
const { src, dest } = gulp
import newer from "gulp-newer";
import gulpIf from "gulp-if";
import imagemin from "gulp-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminZopfli from "imagemin-zopfli";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGiflossy from "imagemin-giflossy";
import browserSync from "browser-sync";
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

import config from "../gulpfile.config";

function task() {
    return src(config.images.src)
        .pipe(newer(config.images.dist))
        .pipe(plumber())
        .pipe(gulpIf(production, imagemin([
            imageminGiflossy(config.images.collection.gif),
            imageminPngquant(config.images.collection.png),
            imageminZopfli({ more: true  }),
            imageminMozjpeg(config.images.collection.jpeg),
            imagemin.svgo(config.images.collection.svg)
        ])))
        .pipe(plumber.stop())
        .pipe(debug({title: 'images:'}))
        .pipe(dest(config.images.dist))
        .pipe(browserSync.stream());
}

export default task;