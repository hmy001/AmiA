export const createCookie = ({prefixKey = '', timeout = null, Path = null, Domain = null, Secure = false}) => {
  class webCookie {
    private prefixKey;
    private timeout;
    private Path;
    private Domain;
    private Secure;
    constructor() {
      this.prefixKey = prefixKey;
      this.timeout = timeout;
      this.Path = Path;
      this.Domain = Domain;
      this.Secure = Secure;
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
     * @description 存储cookie数据
     * @param {string} key 键
     * @param {string} value 存的值
     * @param {number | string | Date | null} timeout 过期时间(单位/秒)
     * @param {string | null} Path 域名后的地址
     * @param {string | null} Domain 域名
     * @param {boolean} Secure 为true时仅仅在https模式下传输
    */
   set(key: string, value: any, timeout: number | string | Date | null | undefined = this.timeout, Path: string | null = this.Path, Domain: string | null = this.Domain, Secure: boolean | null = this.Secure) {
      if (!key || /^(?:expires|max\-age|Path|domain|secure)$/i.test(key)) { return false; } /* eslint-disable-line */
      let Expires = "";
      if (timeout) {
        switch (timeout.constructor) {
          case Number: // 秒，当前时间过去多少秒后失效
            Expires = timeout === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + timeout;
            break;
          case String:// 期待一个标准的时间格式 如2024-01-02，若不符合标准时间格式，默认存储的有效期时一个会话时长
            Expires = "; expires=" + timeout;
            break;
          case Date: // 在Date对象之后过期
            Expires = "; expires=" + (timeout as Date).toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(this.generateKey(key)) + "=" + encodeURIComponent(value) + Expires + (Domain ? "; domain=" + Domain : "") + (Path ? "; Path=" + Path : "") + (Secure ? "; secure" : "");
      return true;
    }
    /**
     * @description 读取cookie
     * @param {string} key 键
     * @returns {string} 返回存储值
    */
    get(key: string) {
      try {
        return JSON.parse(decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(this.generateKey(key)).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")));
      } catch {
        return null;
      }
    }
    /**
     * @description 判断是否有该cookie
    */
    hasItem(key: string) {
      return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(this.generateKey(key)).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }
    /**
     * @description 删除本地某个cookie 设置一个过期的格林尼治时间（世界时间）
     * @param {string} key 键
     * @param {string | null} Path 域名后的地址
     * @param {string | null} Domain 域名
    */
    remove(key: string, Path: string | null = this.Path, Domain: string | null = this.Path) {
      if (!key || !this.hasItem(key)) { return false; }
      document.cookie = encodeURIComponent(this.generateKey(key)) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( Domain ? "; domain=" + Domain : "") + ( Path ? "; Path=" + Path : "");
      return true;
    }
    /**
     * @description 获取所有cookie的键
     * @returns 返回键数组
    */
    keys() {
      let aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/); /* eslint-disable-line */
      for (let nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
      return aKeys;
    }
    /**
     * @description 删除所有cookie
     * @param {string | null} Path 域名后的地址
     * @param {string | null} Domain 域名
    */
    clear(Path: string | null = this.Path, Domain: string | null = this.Domain) {
      this.keys().forEach(k => {
        this.remove(k, Path, Domain);
      });
      return true;
    }
  }
  return new webCookie();
};

