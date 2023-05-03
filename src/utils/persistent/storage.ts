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
    set(key: string, value: any, expire: number | string | Date | null | undefined = timeout) {
      let Expires = null;
      if (expire) {
        switch (expire.constructor) {
          case Number: // 秒，当前时间过去多少秒后失效
            Expires = expire === Infinity ? null : new Date().getTime() + (expire as number) * 1000;
            break;
          case String: // 期待一个标准的时间格式 如2024-01-02，若不符合标准时间格式，默认存储的有效期为永久
            const times = new Date((timeout as string)).getTime(); /* eslint-disable-line */
            Expires = Number.isNaN(times) ? null : times;
            break;
          case Date: // 在Date对象之后过期
            Expires = (expire as Date).getTime();
            break;
        }
      }
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
        // expire: expire !== null ? new Date().getTime() + expire * 1000 : null
        expire: Expires
      });
      this.storage.setItem(this.generateKey(key), stringData);
      return true;
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
      return true;
    }
    /**
     * @description 删除本地所有存储
    */
    clear() {
      this.storage.clear();
      return true;
    }
  }

  return new webStorage();
};
