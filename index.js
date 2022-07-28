import fetch from 'node-fetch';

export class FirebaseEvents {
  constructor(firebaseAppId, apiSecret) {
    this.firebaseAppId = firebaseAppId;
    this.apiSecret = apiSecret;
  }

  triggerEvent(payload) {
    if (
      !payload
      || !payload?.app_instance_id
      || !payload?.event?.name
    ) {
      console.log('failed to trigger firebase event, required feilds missing');
      return {};
    }
    const {
      app_instance_id,
      non_personalized_ads = false,
      event: {
        name,
        params
      }
    } = payload;
    return fetch(`https://www.google-analytics.com/mp/collect?firebase_app_id=${this.firebaseAppId}&api_secret=${this.apiSecret}`, {
        method: "POST",
        body: JSON.stringify({
          "app_instance_id": app_instance_id,
          "non_personalized_ads": non_personalized_ads,
          "events": [
            {
              "name": name || '',
              "params": params || {}
            }
          ]
        })
      });
  }

};

export default { FirebaseEvents };