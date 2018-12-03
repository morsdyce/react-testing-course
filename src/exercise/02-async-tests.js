// Callback based API
export function fetchDataCallback(api, options, callback) {
  // simulate api request delay
  setTimeout(() => {
    callback(api(options))
  }, 300);
}

// Promise based API
export function fetchDataPromise(api, options) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(api(options));
    }, 300);
  });
}
