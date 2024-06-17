const aduanValidation = {
  email_user: {
    notEmpty: {
      errorMessage: "Must be not empty",
    },
    isLenght: {
      options: {
        max: 225,
      },
      errorMessage: "email not more than 225 character",
    },
    isEmail: {
      errorMessage: "Invalid email",
    },
  },
  judul_aduan: {
    notEmpty: {
      errorMessage: "must be not empty",
    },
    isLenght: {
      options: {
        max: 225,
      },
      errorMessage: "judul not more than 225 character",
    },
  },
  deskripsi_aduan: {
    notEmpty: {
      errorMessage: "must be not empty",
    },
    isLenght: {
      options: {
        max: 225,
      },
      errorMessage: "deskripsi aduan not more than 225 character",
    },
  },
  url_aduan: {
    notEmpty: {
      errorMessage: "must not be empty",
    },
    isLenght: {
      options: {
        max: 225,
      },
      errorMessage: "link aduan not more than 225 character",
    },
  },
};

module.exports = aduanValidation;