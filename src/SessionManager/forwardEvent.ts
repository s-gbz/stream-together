import { Session } from '../Session'
import * as ws from 'ws'

export const forwardEvent = (type: string, event: any, ws: ws, session: Session) => {
  session.webSockets.forEach((otherWebSocket) => {
    if (otherWebSocket !== ws) {
      otherWebSocket.send(JSON.stringify({
        type,
        data: {
          event,
        },
      }))
    }
  })
}
