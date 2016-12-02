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

class DatabaseError extends SimplError {
    constructor(opts) {
      super(opts)
      this.name = 'DatabaseError'
    }
}
```
