"use strict";

import gulp from 'gulp'
const { watch, parallel} = gulp
import bs   from 'browser-sync';
import bssi from 'browsersync-ssi';
import tasks from './../tasks';

import config from "../gulpfile.config";

function task() {
    bs.init({
        server: {
            baseDir: config.server.baseDir,
            middleware: bssi({ baseDir: config.server.baseDir, ext: '.html' })
        },
        ghostMode: { clicks: false },
        notify: false,
        online: true,
    });

    watch(config.views.watch, parallel(tasks.views));
    watch(config.styles.watch, parallel(tasks.styles));
    watch(config.scripts.watch, parallel(tasks.scripts));
    watch(config.sprites.watch, parallel(tasks.sprites));
    watch(config.images.watch, parallel(tasks.images));
    watch(config.images.watch, parallel(tasks.imagesWebP));
    watch(config.fonts.watch, parallel(tasks.fonts));
}

export default task;