import {
  IpcRendererOnConstants,
  IpcRendererSendConstants,
} from "../../preload/constants";

export interface IpcRendererOn {
  (
    channel: IpcRendererOnConstants["receiveByMain"],
    listener: (message: string) => void
  ): void;
  (
    channel: IpcRendererOnConstants["receiveMessage"],
    listener: (message: string) => void
  ): void;
}

export interface IpcRendererSend {
  (channel: IpcRendererSendConstants["sendToMain"]): void;
}

export interface IpcRendererInvoke {
  (channel: IpcRendererSendConstants["getIp"]): Promise<string>;
}
