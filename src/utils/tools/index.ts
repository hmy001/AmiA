export class Tools {
  static debounce(callback: Function, delay: number = 500, ...args) {
    let timer;
    return () => {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback.call(this, ...args);
      }, delay);
    };
  }
}
