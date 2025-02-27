const registerValidation = {
  email: {
    notEmpty: {
      errorMessage: "Must be not empty",
    },
    isLength: {
      options: {
        max: 255,
      },
      errorMessage: "Email not more than 255 Characters",
    },
    isEmail: {
      errorMessage: "Must be valid Email",
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
      errorMessage: "At least must be 6-255 Characters",
    },
  },
};
module.exports = registerValidation;
