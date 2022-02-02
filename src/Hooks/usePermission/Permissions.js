export const PERMISSIONS = {
  prospect: {
    FEATURES: {
      SEARCH: true,
      NOTIFICATION: false,
    },
    PAGES: {
      home: true,
      chat: false,
    },
  },

  client: {
    FEATURES: {
      SEARCH: true,
      NOTIFICATION: true,
    },
    PAGES: {
      home: true,
      chat: true,
    },
  },
};
