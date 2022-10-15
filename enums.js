// shared
module.exports.MESSAGE_TYPES = {
  TRX: 'TRX',
  NOTIFY: 'NOTIFY', 
  // TODO
  // TURN: after turn-done by prev-user, notify next-user -> acceptable -> next-user -> ...
  // PLAN: after plan-record created, all users will receiver this notify-message once, 
  // for web-and-mobile users a push notification would be sent twice: once created and before scheduled time 
  // for mobile users an alaram would be set for scheduled time
};

// TODO button-group for channels-list
module.exports.RECORD_TYPES = {
  PAY: 'PAY',
  TURN: 'TURN',
  PLAN: 'PLAN',
};

module.exports.RECORD_STATE = {
  OPEN: 'OPEN',
  PAID: 'PAID',
  DONE: 'DONE',
};

module.exports.LANG = {
  EN: 'en',
  FA: 'fa',
  GIL: 'gil',
  KUR: 'kur',
  TUR: 'tur',
};

// api
module.exports.ROLE = {
  USER: 'USER',
  OPERATOR: 'OPERATOR',
  ADMIN: 'ADMIN',
};

// web
module.exports.RECORD_TYPE = {
  DEBT: 'DEBT',
  CREDIT: 'CREDIT',
  BOTH: 'BOTH',
};

module.exports.PIE_MODES = {
  TOTAL: 'TOTAL',
  DEBT: 'DEBT',
  CREDIT: 'CREDIT',
};

module.exports.LIST_TYPE = {
  RECORDS: 'RECORDS',
  USERS: 'USERS',
};
