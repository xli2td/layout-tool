"use strict";

import pkg from 'gulp'
const { series, parallel } = pkg
import tasks from './tasks';
const { clean, favicons, fonts, images, imagesWebP, scripts, server, sprites, styles, views } = tasks;

export const development = series(
    clean,
    parallel(views, styles, scripts, images, imagesWebP, sprites, fonts, favicons),
    parallel(server));

export const production = series(clean, parallel(views, styles, scripts, images, imagesWebP, sprites, fonts, favicons));

export default development;