declare module 'sharon' {
  export const buffer: PlatformWithCount;
  export const facebook: PlatformWithCount;
  export const gmail: Platform;
  export const linkedin: Platform;
  export const ok: PlatformWithCount;
  export const pinterest: PlatformWithCount;
  export const reddit: PlatformWithCount;
  export const telegram: Platform;
  export const tumblr: PlatformWithCount;
  export const twitter: Platform;
  export const vk: PlatformWithCount;
  export const weibo: Platform;
  export const xing: Platform;

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
}

declare module 'sharon/buffer' {
  export {buffer as default} from 'sharon';
}

declare module 'sharon/facebook' {
  export {facebook as default} from 'sharon';
}

declare module 'sharon/gmail' {
  export {gmail as default} from 'sharon';
}

declare module 'sharon/linkedin' {
  export {linkedin as default} from 'sharon';
}

declare module 'sharon/ok' {
  export {ok as default} from 'sharon';
}

declare module 'sharon/pinterest' {
  export {pinterest as default} from 'sharon';
}

declare module 'sharon/reddit' {
  export {reddit as default} from 'sharon';
}

declare module 'sharon/telegram' {
  export {telegram as default} from 'sharon';
}

declare module 'sharon/tumblr' {
  export {tumblr as default} from 'sharon';
}

declare module 'sharon/twitter' {
  export {twitter as default} from 'sharon';
}

declare module 'sharon/vk' {
  export {vk as default} from 'sharon';
}

declare module 'sharon/weibo' {
  export {weibo as default} from 'sharon';
}

declare module 'sharon/xing' {
  export {xing as default} from 'sharon';
}
