import fetch from "node-fetch";

export class FirebaseEvents {
  constructor(firebaseAppId, apiSecret) {
    this.firebaseAppId = firebaseAppId;
    this.apiSecret = apiSecret;
    this.logger = null;
  }

  setLogger(logger) {
    this.logger = logger;
  }

  triggerEvent(payload) {
    if (this.logger === null) {
      console.error("Logger has not been set! Defaulting to 'console.info'");
      console.info(`Triggering Firebase event - ${this.firebaseAppId}`);
      console.info(payload);
    } else {
      // Pino Logger for event logging with layload
      this.logger.info(`Triggering Firebase event - ${this.firebaseAppId}`);
      this.logger.child({ payload: payload });
    }

    return fetch(
      `https://www.google-analytics.com/mp/collect?firebase_app_id=${this.firebaseAppId}&api_secret=${this.apiSecret}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
    );
  }
}

export default { FirebaseEvents };
