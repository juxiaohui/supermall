// 封装防抖函数
export function debounce(func, delay = 0) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, ...args);
    }, delay);
  }
}