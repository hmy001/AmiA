import settingPersistent from '@/settings/persistent';
import { createStorage } from './storage';

const ls = createStorage({prefixKey: settingPersistent.PREFIX_KEY, storage: localStorage, timeout: settingPersistent.CACHE_TIME});
const ss = createStorage({prefixKey: settingPersistent.PREFIX_KEY, storage: sessionStorage, timeout: settingPersistent.CACHE_TIME});

export class Presistent {
  // localStorage
  static getLocal(key: string) {
    return ls.get(key);
  }
  static setLocal(key: string, val: any, expire: number | null) {
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
  static setSession(key: string, val: any, expire: number | null) {
    ss.set(key, val, expire);
  }
  static removeSession(key: string) {
    ss.remove(key);
  }
  static clearSession() {
    ss.clear();
  }

  // cookie

  static clearAll() {
    ls.clear();
    ss.clear();
  }
}
