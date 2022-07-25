import fetch from 'node-fetch';

export class FirebaseEvents {
  constructor() {}

  triggerEvent(payload) {
    if (
      !payload
      || !payload?.firebase_app_id
      || !payload?.api_secret
      || !payload?.app_instance_id
      || payload?.event?.name
    ) {
      throw Error('failed to trigger event, required feilds missing');
    }
    const {
      firebase_app_id,
      api_secret,
      app_instance_id,
      non_personalized_ads = false,
      event: {
        name,
        params
      }
    } = payload;
    return fetch(`https://www.google-analytics.com/mp/collect?firebase_app_id=${firebase_app_id}&api_secret=${api_secret}`, {
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