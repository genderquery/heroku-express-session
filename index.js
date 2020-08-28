const http = require("http");
const url = require("url");
const app = require("./app");

const addressForServer = (server) => {
  const { address, port } = server.address();
  const hostname = address === "" || address === "::" ? "localhost" : address;
  return url.format({
    protocol: "http",
    port,
    hostname,
  });
};

const server = http.createServer(app);

server.listen(process.env.PORT || 4000, () => {
  const address = addressForServer(server);
  console.log(`🚀 Listening at ${address}`);
});
