import { Injectable } from '@nestjs/common';
import { KeysDTO } from './keys.dto';

@Injectable()
export class AppService {
  private readonly _keys = new Map<string, KeysDTO>();

  getKeys(name: string): Promise<KeysDTO> {
    const key = this._keys.get(name);
    return Promise.resolve(key);
  }

  setKeys(name: string, keys: KeysDTO): void | Promise<void> {
    this._keys.set(name, keys);
    return;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
