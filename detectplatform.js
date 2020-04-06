function DetectPlatform() {

  let result = null;

  if (navigator.userAgent.match(/Mozilla|Chrome|Safari/)) {
    result = 'desktop';
  }

  if (navigator.userAgent.match(/Android/)) {
    result = "Android";
  }

  if (navigator.userAgent.match(/iPhone|iPad/)) {
    result = "iOS";
  }

  return result;

}
