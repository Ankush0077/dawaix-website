// module.exports = function override (config, env) {
//     console.log('override')
//     let loaders = config.resolve
//     loaders.fallback = {
//         "fs": false,
//         "tls": false,
//         "net": false,
//         "http": require.resolve("stream-http"),
//         "https": require.resolve('https-browserify'),
//         "zlib": require.resolve("browserify-zlib") ,
//         "path": require.resolve("path-browserify"),
//         "stream": require.resolve("stream-browserify"),
//         "util": require.resolve("util/"),
//         "crypto": require.resolve("crypto-browserify"),
//         "assert": require.resolve('assert'),
//         "url": require.resolve("url/") ,
//         "querystring": require.resolve("querystring-es3"),
//         "buffer": require.resolve("buffer/"),
//     }
    
//     return config
// }