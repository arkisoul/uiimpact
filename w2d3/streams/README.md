# Streams
Streams are collection of data that is available in form of chunks over a period of time.

Streams help us in working with large files in a convenient way. They help us in making user experience better.

## Types of Streams in Nodejs
1. Readable - It reads the data in chunks(parts)
    - HTTP Request at server end
    - HTTP Response at client end
    - fs - createReadStream
    - process.stdin
2. Writeable - It writes the data in chunks
    - HTTP Request at client end
    - HTTP Response at server end
    - fs - createWriteStream
    - process.stdout, process.stderr
3. Duplex - It reads and writes data in chunks.
    - net module
    - TCP socket
4. Transform - It is a special case of Duplex stream. In between the read and write op it  can transform the data.
    - Crypto
    - zlib


Readable Stream piped to Writable Stream
Readable Stream piped to Duplex/Transform Stream | Duplex/Transform Stream or Writeable Stream