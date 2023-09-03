"use strict";

import bssi from "browsersync-ssi";

const config = {
    clean : [
        "./dist/*"
    ],
    server : {
        baseDir: './dist/',
    },
    favicons: {
        src: "./src/images/favicon/*.{jpg,jpeg,png,gif}",
        dist: "./dist/images/favicons/",
        icons : {
            appleIcon: true,
            favicons: true,
            online: false,
            appleStartup: false,
            android: false,
            firefox: false,
            yandex: false,
            windows: false,
            coast: false
        }
    },
    fonts : {
        src: "./src/fonts/**/*.{woff,woff2}",
        dist: "./dist/fonts/",
        watch: "./src/fonts/**/*.{woff,woff2}"
    },
    images : {
        src: [
            "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
            "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
        ],
        dist: "./dist/img/",
        watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}",
        collection : {
            gif : {
                optimizationLevel: 3,
                optimize: 3,
                lossy: 2
            },
            png: {
                speed: 5,
                quality: [0.6, 0.8]
            },
            jpeg: {
                progressive: true,
                quality: 90
            },
            svg : {
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]
            },
            webp : {
                lossless: true,
                quality: 100,
                alphaQuality: 100
            }
        }
    },
    styles : {
        src: "./src/styles/main.{scss,sass}",
        dist: "./dist/styles/",
        watch: [
            "./src/blocks/**/*.{scss,sass}",
            "./src/styles/**/*.{scss,sass}"
        ]
    },
    scripts: {
        src: "./src/js/index.js",
        dist: "./dist/js/",
        watch: [
            "./src/blocks/**/*.js",
            "./src/js/**/*.js"
        ]
    },
    sprites : {
        src: "./src/img/sprites/*.svg",
        dist: "./dist/img/sprites/",
        watch: "./src/img/sprites/*.svg"
    },
    views : {
        src: [
            "./src/views/**/*.html",
            "./src/views/pages/*.html"
        ],
        dist: "./dist/",
        watch: [
            "./src/views/**/*.html"
        ]
    }
};

export default config;