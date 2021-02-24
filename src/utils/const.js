export const RENDER_PER_STEP_COUNT = 5;

export const CHECK_LONG_POLLING_INTERVAL = 20000;

export const filterValues = [
  {
    value: `all`,
    text: `Все`,
    count: -1,
  },
  {
    value: `no-transfer`,
    text: `Без пересадок`,
    count: 0,
  },
  {
    value: `one-transfer`,
    text: `1 пересадка`,
    count: 1,
  },
  {
    value: `two-transfer`,
    text: `2 пересадки`,
    count: 2,
  },
  {
    value: `three-transfer`,
    text: `3 пересадки`,
    count: 3,
  },
];

export const tabsButtonValues = [
  {
    value: `first-cheap`,
    text: `Самый дешевый`,
  },
  {
    value: `first-fast`,
    text: `Самый быстрый`,
  },
];
