import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly _keys = new Map<string, string>();

  getKeys(name: string): Promise<string> {
    const key = this._keys.get(name);
    return Promise.resolve(key);
  }

  setKeys(name: string, keys: string): void | Promise<void> {
    this._keys.set(name, keys);
    return;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
