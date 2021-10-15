export {default as buffer} from './buffer.js';
export {default as facebook} from './facebook.js';
export {default as gmail} from './gmail.js';
export {default as linkedin} from './linkedin.js';
export {default as ok} from './ok.js';
export {default as pinterest} from './pinterest.js';
export {default as reddit} from './reddit.js';
export {default as telegram} from './telegram.js';
export {default as tumblr} from './tumblr.js';
export {default as twitter} from './twitter.js';
export {default as vk} from './vk.js';
export {default as weibo} from './weibo.js';
export {default as xing} from './xing.js';

export interface PlatformWithCount extends Platform {
  count: CountFunction;
}

export interface Platform extends ShareFunction {
  defer: DeferFunction;
  href: HrefFunction;
}

export interface CountFunction {
  (url: string, callback: CountCallback): void;
  (callback: CountCallback): void;
}

export type DeferFunction = (url?: string) => ShareFunction;

export interface ShareFunction {
  (url: string, options?: HrefOptions): WindowProxy | null;
  (options?: HrefOptions): WindowProxy | null;
}

export interface HrefFunction {
  (url: string, options?: HrefOptions): string;
  (options?: HrefOptions): string;
}

export type CountCallback = (error: Error | null, result: number) => void;

export type HrefOptions = Record<string, Stringifiable | Stringifiable[]>;

export type Stringifiable = string | boolean | number | null | undefined;
