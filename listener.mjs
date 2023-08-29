import events from "events"

const eventListener = new events.EventEmitter();

const NOTIFICATION_CHANEL = "notification-chanel"

export const sendNotification = message => {
  eventListener.emit(NOTIFICATION_CHANEL, message)
}

export const startNotificationListener = () => {
  eventListener.on(NOTIFICATION_CHANEL, (message) => {
    console.log(message);
  })
}