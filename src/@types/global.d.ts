import {
  IpcRendererSendConstants,
  IpcRendererOnConstants,
} from "../preload/constants";

interface IpcRendererOn {
  (
    channel: IpcRendererOnConstants["receiveByMain"],
    listener: (message: string) => void
  ): void;
}

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: {
          (channel: IpcRendererSendConstants["sendToMain"]): void;
        };
        on: IpcRendererOn;
        once: IpcRendererOn;
      };
      store: {
        get: (key: string) => any;
        set: (key: string, value: any) => void;
        setCount: (newCount: number) => void;
        onChangeCount: (
          listener: (newValue: any, oldValue: any) => void
        ) => void;
      };
    };
  }
}

export {};
