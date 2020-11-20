export class Addres {
  private _lat: number;
  private _lng: number;
  private _addr: string;

  constructor() {
  }

  get lat(): number {
    return this._lat;
  }

  set lat(value: number) {
    this._lat = value;
  }

  get lng(): number {
    return this._lng;
  }

  set lng(value: number) {
    this._lng = value;
  }

  get addr(): string {
    return this._addr;
  }

  set addr(value: string) {
    this._addr = value;
  }
}
