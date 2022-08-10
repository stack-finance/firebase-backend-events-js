import fetch from "node-fetch";

export class FirebaseEvents {
  constructor(firebaseAppId, apiSecret) {
    this.firebaseAppId = firebaseAppId;
    this.apiSecret = apiSecret;
  }

  triggerEvent(payload) {
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
