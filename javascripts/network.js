// 网络连接情况，只在一些移动浏览器内才能用
// https://developer.mozilla.org/en-US/docs/Web/API/navigator/connection

module.exports = () => {
  const connection = navigator.connection
  let network

  if (connection !== undefined) {
    network = {type: connection.type, speed: connection.downlinkMax}
  }

  return network
}
