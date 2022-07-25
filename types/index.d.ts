export class FirebaseEvents {

    constructor()
  
    /**
     * Method to add a new user or update an existing user.
     * @param {object} payload - An object which contains the JSON payload defined in the docs here: https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview#request-body-0-5
     * @returns {Promise} A response promise(fetch promise) from the provider, if successful, the response will be in JSON format. Errors need to be handled separately.
     */
     addOrUpdateUser(payload: object): Promise<any>
  
}