/**
 * Created by lvdada on 15/11/12.
 */
'use strict'

module.exports  = function (postion) {
  const crd = postion.coords

  const latitude = crd.latitude
  const longitude = crd.longitude

  return {latitude, longitude}
}
