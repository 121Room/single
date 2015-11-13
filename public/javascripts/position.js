/**
 * Created by lvdada on 15/11/12.
 */

// 用户的经度和纬度
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation

'use strict'

module.exports  = (postion) => {
  const crd = postion.coords

  const latitude = crd.latitude
  const longitude = crd.longitude

  return {latitude, longitude}
}
