Pidusage as a promise
=====================

More information in the [pidusage repository](https://github.com/soyuka/pidusage).

This package wraps pidusage in a promise:

```
var pidusage = require('pidusage-promise')

pidusage(1234)
.then(function (stat) {
	console.log('Pcpu: %s', stat.cpu)
	console.log('Mem: %s', stat.memory) //those are bytes
})
```
