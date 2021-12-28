export interface IpcRendererSendConstants {
  sendToMain: "send-to-main";
}

export interface IpcRendererOnConstants {
  receiveByMain: "receive-by-main";
}

export interface IpcRendererConstants {
  send: IpcRendererSendConstants;
  on: IpcRendererOnConstants;
}

export const ipcRenderer: IpcRendererConstants = {
  send: {
    sendToMain: "send-to-main",
  },
  on: {
    receiveByMain: "receive-by-main",
  },
};
