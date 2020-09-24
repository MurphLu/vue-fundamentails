# build-a-bot

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### deep link handle
for express serve:
use 
```
const express = require("express");
const history = require('connect-history-api-fallback'); 
const app = express();
app.use(history({index: 'index.html'}));
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
