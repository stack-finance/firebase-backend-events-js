import fetch from "node-fetch";

export class FirebaseEvents {
  constructor(firebaseAppId, apiSecret, logger) {
    this.firebaseAppId = firebaseAppId;
    this.apiSecret = apiSecret;
    this.logger = logger;
  }

  triggerEvent(payload) {
    // Pino Logger for event logging with layload
    this.logger.info(`Triggering Firebase event`);
    this.logger.child({'payload': payload});

    return fetch(
      `https://www.google-analytics.com/mp/collect?firebase_app_id=${this.firebaseAppId}&api_secret=${this.apiSecret}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
  }
}

export default { FirebaseEvents };
