import settingPersistent from '@/settings/persistent';
import { createStorage } from './storage';
import { createCookie } from './cookie';

const ls = createStorage({prefixKey: settingPersistent.PREFIX_KEY, storage: localStorage, timeout: settingPersistent.CACHE_TIME});
const ss = createStorage({prefixKey: settingPersistent.PREFIX_KEY, storage: sessionStorage, timeout: settingPersistent.CACHE_TIME});
const ck = createCookie({prefixKey: settingPersistent.PREFIX_KEY, timeout: settingPersistent.CACHE_TIME, Path: settingPersistent.PATH, Domain: settingPersistent.DOMAIN, Secure: settingPersistent.SECURE})
export class Presistent {
  // localStorage
  static getLocal(key: string) {
    return ls.get(key);
  }
  static setLocal(key: string, val: any, expire?: number | string | Date | null) {
    ls.set(key, val, expire);
  }
  static removeLocal(key: string) {
    ls.remove(key);
  }
  static clearLocal() {
    ls.clear();
  }

  // sessionStorage
  static getSession(key: string) {
    return ss.get(key);
  }
  static setSession(key: string, val: any, expire?: number | string | Date | null) {
    ss.set(key, val, expire);
  }
  static removeSession(key: string) {
    ss.remove(key);
  }
  static clearSession() {
    ss.clear();
  }

  // cookie
  static getCookie(key: string) {
    return ck.get(key);
  }
  static setCookie(key: string, val: any, expire?: number | string | Date | null) {
    ck.set(key, val, expire);
  }
  static removeCookie(key: string) {
    ck.remove(key);
  }
  static clearCookie() {
    ck.clear();
  }

  static clearAll() {
    ls.clear();
    ss.clear();
    ck.clear();
  }
}
