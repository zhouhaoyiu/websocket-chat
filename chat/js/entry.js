; ((doc, storage, location) => {
  const oUsername = doc.querySelector('#username')
  const oEnterBtn = doc.querySelector('#enter')

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    oEnterBtn.addEventListener('click', handleEnterBtnClick, false)
  }

  function handleEnterBtnClick() {
    const username = oUsername.value.trim()
    console.log(username)

    if (username.length < 6) {
      alert('用户名小于6')
      return;
    }
    storage.setItem('username', username)
    location.href = 'index.html'
  }
  init()
})(document, localStorage, location);