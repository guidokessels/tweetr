# tweetr

[ ] bla

Quick project to test a workflow with GruntJS, BusterJS, TravisCI and GitHub

## Getting Started
### On the server
Install the module with: `npm install tweetr`

```javascript
var tweetr = require('tweetr');
tweetr.awesome(); // "awesome"
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/guidokessels/tweetr/master/dist/tweetr.min.js
[max]: https://raw.github.com/guidokessels/tweetr/master/dist/tweetr.js

In your web page:

```html
<script src="dist/tweetr.min.js"></script>
<script>
awesome(); // "awesome"
</script>
```

In your code, you can attach tweetr's methods to any object.

```html
<script>
this.exports = Bocoup.utils;
</script>
<script src="dist/tweetr.min.js"></script>
<script>
Bocoup.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Guido Kessels  
Licensed under the MIT license.
