const {makeSuccessResponse} = require('../util');
module.exports = [
  {
    meta: 'GET|json|/api/user/getInfo',
    data: makeSuccessResponse({
      username: "@cname",
      token: "@guid"
    })
  },
  {
    meta: 'GET|json|/api/user/getAccessCode',
    data: makeSuccessResponse([
      "DASHBOARD_LOOKUP",
      "POST_LOOKUP",
      "APPLICATION_LOOKUP",
      "DASHBOARD_LOGOUT",
    ])
  },
  {
    meta: 'GET|json|/api/login',
    data: makeSuccessResponse({
      token: '@guid'
    })
  }
];
