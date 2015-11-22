const resourceLoadTime = require('./resource_load_time')
const getResourceTimingData = require('./resource_timing')

// 获取最后加载的一张图片的信息

module.exports = (resourceTiming) => {
  const imgTimingData = resourceTiming.filter(r => (r.initiatorType === 'img'))

  if (imgTimingData.length === 0) {return}

  const lastImgTiming = imgTimingData.reduce((prev, current) => {
    if (resourceLoadTime(prev) < resourceLoadTime(current)) {
      return current
    } else {
      return prev
    }
  })

  return getResourceTimingData(lastImgTiming)
}

//首屏时间尝试：
  //1,获取首屏基线高度
  //2,计算出基线dom元素之上的所有图片元素
  //3,所有图片onload之后为首屏显示时间
  //
  // function getOffsetTop(ele) {
  //   var offsetTop = ele.offsetTop;
  //   if (ele.offsetParent !== null) {
  //     offsetTop += getOffsetTop(ele.offsetParent);
  //   }
  //   return offsetTop;
  // }

  // var firstScreenHeight = window.screen.height;
  // var firstScreenImgs = [];
  // var isFindLastImg = false;
  // var allImgLoaded = false;
  // var imgs = [];
  // var img;

  // imgs = document.body.querySelector('img');
  // for (var i = 0; i < imgs.length; i++) {
  //   img = imgs[i];
  //   var imgOffsetTop = getOffsetTop(img);
  //   if (imgOffsetTop > firstScreenHeight) {
  //     continue;
  //   } else if (imgOffsetTop <= firstScreenHeight && !img.hasPushed) {
  //     img.hasPushed = 1;
  //     firstScreenImgs.push(img);
  //   }
  // }

  // var t = setInterval(function() {
  //   var i, img;
  //   if (isFindLastImg) {
  //     if (firstScreenImgs.length) {
  //       for (i = 0; i < firstScreenImgs.length; i++) {
  //         img = firstScreenImgs[i];
  //         if (!img.complete) {
  //           allImgLoaded = false;
  //           break;
  //         } else {
  //           allImgLoaded = true;
  //         }
  //       }
  //     } else {
  //       allImgLoaded = true;
  //     }
  //     if (allImgLoaded) {
  //       collect.add({
  //         firstScreenLoaded: startTime - Date.now()
  //       });
  //       clearInterval(t);
  //     }
  //   } else {  //没有找到超出屏幕的图片
  //     var imgs = document.body.querySelector('img');
  //     for (i = 0; i < imgs.length; i++) {
  //       img = imgs[i];
  //       var imgOffsetTop = getOffsetTop(img);
  //       if (imgOffsetTop > firstScreenHeight) {
  //         isFindLastImg = true;
  //         break;
  //       } else if (imgOffsetTop <= firstScreenHeight && !img.hasPushed) {
  //         img.hasPushed = 1;
  //         firstScreenImgs.push(img);
  //       }
  //     }
  //   }
  // }, 10);
