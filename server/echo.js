const server = http.createServer((request, response) => {
  //console.log(request.url);
  if (request.url ==== "/") { "Content-Type": "application/json" });
  response.write(JSON.stringify ({ message: Welcome to the main page }));
  response.end();
  }
});
server.listen(404);
console.log(`Listening on Port: ${4040}`);
