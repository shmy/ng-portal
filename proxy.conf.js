module.exports = {
  "/api": {
    target: "http://localhost:4300/api",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    pathRewrite: {
      "^/api": ""
    }
  }
}
