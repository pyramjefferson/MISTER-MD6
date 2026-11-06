const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const TARGET = "http://51.75.118.18:20240";
const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    ws: true,
    onError: (err, req, res) => {
      res.writeHead(502, { "Content-Type": "text/plain" });
      res.end("Server la pa reponn. Verifye Katabump.");
    },
  })
);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Proxy ap kouri sou pot " + PORT));
