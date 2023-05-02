export const createStorage = ({
  prefixKey = '',
  storage = localStorage,
  timeout = null,
}) => {
  class webStorage {
    private prefixKey: string;
    private storage: Storage;
    constructor() {
      this.prefixKey = prefixKey;
      this.storage = storage;
    }
    /**
     * @description 生成修饰后的键
     * @param {string} key 键
     * @returns {string} 返回修饰过后的键
    */
    generateKey(key: string) {
      return `${this.prefixKey}-${key}`;
    }
    /**
     * @description 存储本地数据
     * @param {string} key 键
     * @param {string} value 存的值
     * @param {string} expire 过期时间(单位/秒)
    */
    set(key: string, value: any, expire: number | null = timeout) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
        expire: expire !== null ? new Date().getTime() + expire * 1000 : null
      });
      this.storage.setItem(this.generateKey(key), stringData);
    }
    /**
     * @description 读取本地存储
     * @param {string} key 键
     * @returns {string} 返回存储值
    */
    get(key: string) {
      const val = this.storage.getItem(this.generateKey(key));
      if(!val) return null;
      try {
        const parseValue = JSON.parse(val);
        const { value, expire} = parseValue;
        if (expire == null || expire >= new Date().getTime()) {
          return value;
        }
      } catch {
        return null;
      }
    }
    /**
     * @description 删除本地某个key的存储
     * @param {string} key 键
    */
    remove(key: string) {
      this.storage.removeItem(this.generateKey(key));
    }
    /**
     * @description 删除本地所有存储
    */
    clear() {
      this.storage.clear();
    }
  }

  return new webStorage();
};
