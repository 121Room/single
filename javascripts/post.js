// ajax post 的简单包装

module.exports = (data) => {
  let request = new XMLHttpRequest()
  request.open('POST', 'http://localhost:4567/report', true)
  request.setRequestHeader('Content-Type', 'application/json')
  request.send(JSON.stringify(data))
}
