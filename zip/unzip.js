let fileSystem = require('fs');

let zipFile = require('zlib');

fileSystem.createReadStream('new.txt.gz')
    .pipe(zipFile.createGunzip())
    .pipe(fileSystem.createWriteStream('new.txt'))

console.log("end program");