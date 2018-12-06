onmessage = e => {
  console.log(e.data)

  let count;

  switch(e.data.cmd) {
  case 'countUp':
    count = e.data.count + 1
    break
  case 'countDown':
    count = e.data.count - 1
    break
  case 'countReset':
    count = e.data.initialCount
  }

  postMessage({ count })
}
