# nadia-webpack-encore-entry-collector
An easy way to add Encore entry files


### Usage

```js
const Encore = require('@symfony/webpack-encore');
const collector = require('nadia-webpack-encore-entry-collector');
const path = require('path');

let dir = path.resolve(__dirname, './Resources/assets/js').replace(/\\/g, '/');

collector.collect(
    Encore,
    dir + '/app/**/*\.@(foo|bar)\.js',
    [
        {
            'pattern': dir + '/(app/(.*))\.foo\.js',
            'entryName': '$1'
        },
        {
            'pattern': dir + '/(app/(.*)\.bar)\.js',
            'entryName': '$1'
        }
    ]
);
```
