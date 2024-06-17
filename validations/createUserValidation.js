const createUserValidation = {
  email: {
    notEmpty: {
      errorMessage: "Must be not empty",
    },
    isEmail: {
      errorMessage: "Must be valid email",
    },
    isLength: {
      options: {
        max: 255,
      },
      errorMessage: "Email not more than 255 characters",
    },
  },
  username: {
    notEmpty: {
      errorMessage: "Must be not empty",
    },
    isLength: {
      options: {
        min: 3,
        max: 255,
      },
      errorMessage: "At least must be 3-255 Characters",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Must be not empty",
    },
    isLength: {
      options: {
        min: 6,
        max: 128,
      },
      errorMessage: "At least 6-128 characters",
    },
  },
};

module.exports = createUserValidation;
