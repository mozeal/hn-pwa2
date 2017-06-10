/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/* eslint-env node */
const path = 'https://api.hackerwebapp.com';

module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/favicon.ico',
        '/manifest.json',
        '/images/*',
    ],
    navigateFallback: 'index.html',
    navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
    runtimeCaching: [
        {
            urlPattern: /\/bower_components\/webcomponentsjs\/.*.js/,
            handler: 'fastest',
            options: {
                cache: {
                    name: 'webcomponentsjs-polyfills-cache'
                }
            }
        },
        {
            urlPattern: new RegExp(`${path}/(news|newest|ask|show|jobs)`),
            handler: 'networkFirst',
            options: {
                cache: {
                    maxEntries: 30,
                    name: 'articles-cache'
                }
            }
        }, {
            urlPattern: new RegExp(`${path}/item/`),
            handler: 'networkFirst',
            options: {
                cache: {
                    maxEntries: 30,
                    name: 'comments-cache'
                }
            }
        }
    ]
};
