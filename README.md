# wal.newPage

![N|Solid](https://img.shields.io/badge/build-passing-brightgreen) ![N|Solid](https://img.shields.io/node/v/react)

A custom starter page for your browser, configured to work with pywal.

Features a synced clock and bookmark folders.
[Example](/example.png)
## Configuration and Install
You will need to install [Node.js](https://nodejs.org/) to use wal.newPage

Then from the wal.newPage directory, install the dependencies with:

```sh
$ npm install
```

You can now change color schemes or bookmarks.

### Pywal Color Scheme
Inside of index.css you will need to import your pywal configuration. The first line is an example of what this might look like. By default, on linux, pywall saves a css file inside ~/.cache/wal/colors.css
```sh
@import url('file:///home/user/.cache/wal/colors.css'); 
```
IMPORTANT: do not use the ~ character, as this messes up the bundler. 

### Custom Color Scheme
If you have your own color scheme that you would like to implement, delete the first line, mentioned above.
Below the import is an example of what the structure for a color scheme would be. 

By default, the css file only uses --background, --color14, --color13, and --color7. Feel free to change this and use as many colors as you'd like.

### Changing Bookmarks
To change bookmark links, their corresponding names, or their directories, you must edit /components/state.js
The different bookmark directories are keys within the linkSections object. You can name the keys whatever you'd like, the key names will show up as their label on the page. The same applies to the keys and value within those directories. The key will be displayed as the label.

Below is an example of a folder that would be displayed as "GettingYoked", with its containing links and labels.
```sh
const init = {
  linkSections: {
    GettingYoked: {
      active: false,
      MyRoutine: "https://www.zyzzimissyou.com/",
      Diet: "https://www.childrentears.org/",
      ToDo: "https://notrackingweights.lad/",
    }
  }
}
```
Note* the "active" key is required, do not remove it. 

### Saving Changes


After making your changes, you will have to transpile the code. You can do this with the following command.

```sh
$ npm run build
```

This will create the build inside the /dist directory.

If you want to do multiple changes, or just want to see the changes without having to transpile each time, you can run:
```sh
$ npm start
```
This will start a live server of the page, and updates automatically with every save. 
By default the server runs on http://localhost:1234

After you are done configuring, run the build command to create the finished page. You can then configure your browser to show the page. Simply link url browser path to the dist/index.hmtl 

For example: file:///home/user/yourPath/wal.newPage/dist/index.html

### Tech Used

wal.newPage uses following tech stack

| Tech | Source |
| ------ | ------ |
| hyperapp | https://github.com/JorgeBucaran/hyperapp |
| hyperapp/time | https://www.npmjs.com/package/@hyperapp/time |
| hyperlit | https://github.com/zaceno/hyperlit |
| parcel | https://github.com/parcel-bundler/parcel |


