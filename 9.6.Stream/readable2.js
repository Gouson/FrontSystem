const {
    Readable
} = require("stream");
const inStream = new Readable({
    read(size) {
        const char = this.push(String.fromCharCode(this.currentCharCode++));
        console.log(`推了${char}`)
        if (this.currentCharCode > 90) {
            this.push(null);
        }
    }
})
inStream.currentCharCode = 65
inStream.pipe(process.stdout)