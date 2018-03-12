var pidusage = require('pidusage')

function pidusagePromise (pids) {
  return new Promise(function (resolve, reject) {
    pidusage.stat(pids, function (err, data) {
      if (err) {
        reject(err)
        return
      }

      resolve(data)
    })
  })
}

module.exports = pidusagePromise
module.exports.stat = pidusagePromise
