const http = require('http');

http.createServer( ( req, res ) => {
  res.writeHead( 200, { "Content-type": "application/json" })
  const persona = {
    nombre: "leo",
    edad: 20,
    url: req.url

  }
  res.write( JSON.stringify( persona ) )
  res.end()

}).listen(3000, console.log("Escuchando en el puerto 3000"))