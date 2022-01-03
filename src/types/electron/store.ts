export interface Store {
  get: (key: string) => any;
  set: (key: string, value: any) => void;
  setCount: (newCount: number) => void;
  onChangeCount: (listener: (newValue: any, oldValue: any) => void) => void;
}
