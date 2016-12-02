# SimplError

Simple Custom Errors

### Usage

```js
const SimplError = require('simplerror')

throw new SimplError({
    message: 'Unexpected Error',
    code: 'UNEXPERR'
})
```

### Extend 

```js
const SimplError = require('simplerror')

class DatabaseError extends SimpleError {
    constructor() {
        this.name = 'DatabaseError'
    }
}
```
