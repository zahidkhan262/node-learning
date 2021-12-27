let fileSystem = require('fs');

let zipFile = require('zlib');

fileSystem.createReadStream('new.txt')
    .pipe(zipFile.createGzip())
    .pipe(fileSystem.createWriteStream('new.txt.gz'))

console.log("end program");