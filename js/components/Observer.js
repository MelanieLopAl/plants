class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(item => item !== subscriber);
  }

  notify(eventData) {
    this.subscribers.forEach(subscriber => subscriber.update(eventData));
  }
}

export default Observer;
