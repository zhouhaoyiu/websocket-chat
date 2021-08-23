import { WS_ADDRESS } from "../configs"

function useWebSocket(handleMessage) {
  const ws = new WebSocket(WS_ADDRESS)

  const init = () => {
    ws.addEventListener('open', handleOpen, false)
    ws.addEventListener('close', handleClose, false)
    ws.addEventListener('error', handleError, false)
    ws.addEventListener('message', handleMessage, false)
  }

  function handleOpen(e) {
    console.log(e)
  }

  function handleClose(e) {
    console.log(e)
  }
  
  function handleError(e){
    console.log(e)
  }

  init()
  return ws
}
export default useWebSocket