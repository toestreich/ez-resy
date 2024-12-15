const VENUE_ID="1505"; // don angie 1505
const DATE="2024-12-22";
const EARLIEST="17:00";
const LATEST="19:30";
const PARTY_SIZE=6;

function existingReservationConfig(authToken) {
  let configObject = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.resy.com/3/user/reservations?limit=10&offset=1&type=upcoming',
    headers: {
      authority: 'api.resy.com',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,la;q=0.8',
      authorization: 'ResyAPI api_key="VbWk7s3L4KiK5fzlO7JD3Q5EYolJI7n5"',
      'cache-control': 'no-cache',
      origin: 'https://resy.com',
      referer: 'https://resy.com/',
      'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
      'x-origin': 'https://resy.com',
      'x-resy-auth-token': `${authToken}`,
      'x-resy-universal-auth': `${authToken}`,
    },
  };
  return configObject;
}

let slotConfig = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://api.resy.com/4/find?lat=0&long=0&day=${DATE}&party_size=${PARTY_SIZE}&venue_id=${VENUE_ID}`,
  headers: {
    authority: 'api.resy.com',
    accept: 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,la;q=0.8',
    authorization: 'ResyAPI api_key="VbWk7s3L4KiK5fzlO7JD3Q5EYolJI7n5"',
    'cache-control': 'no-cache',
    origin: 'https://resy.com',
    referer: 'https://resy.com/',
    'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'x-origin': 'https://resy.com',
  },
};

function bookingConfig(token) {
  // parse token as url encoded string
  const slotId = encodeURIComponent(token);
  const configObject = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.resy.com/3/details?&day=${DATE}&party_size=${PARTY_SIZE}&config_id=${slotId}`,
    headers: {
      authority: 'api.resy.com',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,la;q=0.8',
      authorization: 'ResyAPI api_key="VbWk7s3L4KiK5fzlO7JD3Q5EYolJI7n5"',
      'cache-control': 'no-cache',
      origin: 'https://resy.com',
      referer: 'https://resy.com/',
      'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
      'x-origin': 'https://resy.com',
    },
  };
  return configObject;
}

function finalConfig(authToken) {
  const configObject = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://api.resy.com/3/book`,
    headers: {
      authority: 'api.resy.com',
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,la;q=0.8',
      authorization: 'ResyAPI api_key="VbWk7s3L4KiK5fzlO7JD3Q5EYolJI7n5"',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded',
      origin: 'https://widgets.resy.com',
      referer: 'https://widgets.resy.com/',
      'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
      'x-origin': 'https://widgets.resy.com',
      'x-resy-auth-token': `${authToken}`,
      'x-resy-universal-auth': `${authToken}`,
    },
  };
  return configObject;
}

export { existingReservationConfig, slotConfig, bookingConfig, finalConfig, DATE, PARTY_SIZE, VENUE_ID, EARLIEST, LATEST };
