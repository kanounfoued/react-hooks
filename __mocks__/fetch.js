function fetchMock(url, suffix = "") {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve({
            data: url + suffix,
          }),
      });
    }, 200 + Math.random() * 300);
  });
}
