const { ipcRenderer } = (window as any).electron

export const ipc = {
  on: (channel: string, callback: (...args: any[]) => void) => {
    ipcRenderer.on(channel, callback)
  },
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args)
  },
} 