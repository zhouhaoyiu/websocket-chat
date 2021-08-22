; ((doc, storage) => {
  const oList = doc.querySelector('#list')
  const oMsg = doc.querySelector('#message')
  const oSendBtn = doc.querySelector('#send')
  const ws = new WebSocket('ws:localhost:8000')
  let username = ''
  const init = () => {
    bindEvent();
  }

  function bindEvent() {
    oSendBtn.addEventListener('click', handleSendBtnClick, false)
    ws.addEventListener('open', handleOpen, false)
    ws.addEventListener('close', handleClose, false)
    ws.addEventListener('error', handleError, false)
    ws.addEventListener('message', handleMessage, false)
  }

  function handleSendBtnClick() {
    const msg = oMsg.value


    if (!msg.trim().length) {
      return;
    }
    ws.send(JSON.stringify({
      user: username,
      dateTime: new Date().getTime(),
      message: msg
    }))
    oMsg.value = ''
  }

  function handleOpen(e) {
    console.log('websock open', e)
    username = storage.getItem('username')

    if (!username) {
      location.href = 'entry.html'
      return;
    }
  }

  function handleClose(e) {
    console.log('websocket close', e)
  }

  function handleError(e) {
    console.log('websocket error', e)
  }

  function handleMessage(e) {
    console.log('websocket message', JSON.parse(e.data))
    const msgData = JSON.parse(e.data)
    oList.appendChild(createMsg(msgData))
  }

  function createMsg(data) {
    const { user, dateTime, message } = data
    console.log(user)
    console.log(dateTime)
    console.log(message)
    const oItem = doc.createElement('li')
    oItem.innerHTML = `
      <p>
        <span>${user}</span>
        <i>${new Date(dateTime)}</i>
      </p>
      <p>消息: ${message}</p>
    `
    console.log(oItem)
    return oItem
  }
  init()
})(document, localStorage)