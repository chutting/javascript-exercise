async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (e) {
    return new Error('error msg');
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
