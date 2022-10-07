const actionTypes = {
  BTN__LOOP_BREAK: 'BTN__LOOP_BREAK',
  BTN__ALERT_MSG: 'BTN__ALERT_MSG',
  OPT__THEME_COLOR: 'OPT__THEME_COLOR',
  OPT__BG_IMAGE: 'OPT__BG_IMAGE',
};

// can be given or taken
const achievments = [
  {
    id: 'experim_ft',
    name: { en: 'Enabled experimental features', fa: 'فعال کردن حالت آزمایشی' },
    actions: [actionTypes.BTN__LOOP_BREAK],
  },
  {
    id: 'lapalandirma',
    name: { en: 'Discovered Lapalandirma', fa: 'لاپالاندیرما رو پیدا کردی' },
    actions: [actionTypes.BTN__LOOP_BREAK],
  },
  {
    id: 'hurt_his_eye',
    name: { en: "Hurt app's eye", fa: 'چشم برنامه رو درد آوردی' },
    actions: [actionTypes.BTN__ALERT_MSG],
  },
  {
    id: 'said_sorry',
    name: { en: 'You said sorry', fa: 'گفتی معذرت میخوام' },
    actions: [actionTypes.OPT__THEME_COLOR, actionTypes.OPT__BG_IMAGE],
  },
  {
    id: 'take_tour',
    name: { en: 'Finished app tour', fa: 'تور برنامه رو دیدی' },
    actions: [actionTypes.OPT__BG_IMAGE],
  },
  {
    id: 'add_card_no',
    name: { en: 'Added card no.', fa: 'شماره کارتت رو اضافه کردی' },
    actions: [],
  },
];

module.exports = { actionTypes, achievments };

// TODO evolve: __v , createdAt , friends-count
