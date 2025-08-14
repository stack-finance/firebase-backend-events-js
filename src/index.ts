import fetch from "node-fetch";
import type { Logger } from "pino";

export class FirebaseEvents {
  private readonly firebaseAppId: string;
  private readonly apiSecret: string;
  logger?: Logger;

  constructor(firebaseAppId: string, apiSecret: string) {
    this.firebaseAppId = firebaseAppId;
    this.apiSecret = apiSecret;
  }

  setLogger(logger: Logger) {
    this.logger = logger;
  }

  async triggerEvent(payload: object) {
    if (this.logger) {
      this.logger.info(`Triggering Firebase event - ${this.firebaseAppId}`);
      this.logger.child({ payload: payload });
    } else {
      console.error('Logger has not been set! Defaulting to "console.info"');
      console.info(`Triggering Firebase event - ${this.firebaseAppId}`);
      console.info(payload);
    }

    return await fetch(
      `https://www.google-analytics.com/mp/collect?firebase_app_id=${this.firebaseAppId}&api_secret=${this.apiSecret}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      },
    );
  }
}

export default { FirebaseEvents };
