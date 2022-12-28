const https = require('https'),
      axios = require('axios'),
      rateLimit = require('axios-rate-limit'),
      axiosRetry = require('axios-retry'),
      _0x4e9a97 = {
  'maxRequests': 0x1e,
  'perMilliseconds': 0x3e8,
  'maxRPS': 0x1e
};

const httpClient = rateLimit(axios.create(), _0x4e9a97);
httpClient.defaults.timeout = 30000, httpClient.defaults.httpsAgent = new https.Agent({}), axiosRetry(httpClient, {
  'retries': 0x3,
  'retryDelay': axiosRetry.exponentialDelay
}), console.log('Server Axios HttpClient RPS: ' + httpClient.getMaxRPS());
module.exports = httpClient;