const Ws = require('ws');

; ((Ws) => {
  const server = new Ws.Server({ port: 8000 })

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    server.on('open', handleOpen)
    server.on('close', handleClose)
    server.on('error', handleError)
    server.on('connection', handleConnection)
  }

  function handleOpen() {
    console.log('websocket open')
  }

  function handleClose() {
    console.log('websocket close')
  }

  function handleError() {
    console.log('websocket error')
  }

  function handleConnection(ws) {
    console.log('websocket connected')
    ws.on('message', handleMessage)
  }

  function handleMessage(msg) {
    server.clients.forEach(function(c){
      c.send(msg.toString())
    })
  }
  init()
})(Ws)