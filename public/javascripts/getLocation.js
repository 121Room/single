/**
 * Created by lvdada on 15/11/12.
 */
'use strict'

module.exports  = function () {
  let location = Object.create(null)
  let options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  }


  let success = function(pos) {
    const crd = pos.coords
    const latitude = crd.latitude
    const longitude = crd.longitude
    const accuracy = crd.accuracy
    location.latitude = latitude
    location.longitude = longitude
    location.accuracy = accuracy
    console.log(JSON.stringify(location))
  }

  let error = function(err) {
    console.log('ERROR(' + err.code + '): ' + err.message)
  }
  navigator.geolocation.getCurrentPosition(success, error, options)
  return location
}