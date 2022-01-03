export interface IpcRendererSendConstants {
  sendToMain: "send-to-main";
  getIp: "get-ip";
}

export interface IpcRendererOnConstants {
  receiveByMain: "receive-by-main";
  receiveMessage: "receive-message";
}

export interface IpcRendererConstants {
  send: IpcRendererSendConstants;
  on: IpcRendererOnConstants;
}

export const ipcRenderer: IpcRendererConstants = {
  send: {
    sendToMain: "send-to-main",
    getIp: "get-ip",
  },
  on: {
    receiveByMain: "receive-by-main",
    receiveMessage: "receive-message",
  },
};
