const apiId = 'q0x1h0hfl8'
const serviceEndpoint = 'execute-api.eu-north-1.amazonaws.com/dev'
export const apiEndpoint = `https://${apiId}.${serviceEndpoint}`

export const authConfig = {
    // TODOx: Create an Auth0 application and copy values from it into this map
    domain: 'ybsnek.eu.auth0.com',            // Auth0 domain
    clientId: 'ZQhSgE9IdVmkiswhKpuIYIAm9xxOi0wP',          // Auth0 client id
    callbackUrl: 'http://localhost:3000/callback'
  }
  