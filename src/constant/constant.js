const VERSION = "v2";
const DONOR = "/donor";
exports.ALLOWED_IDLE_TIME = 600000;
exports.CONFIG = {
  BASE_URL: "https://local.api.selectiva.org/" + VERSION + DONOR,
  ANOTHER_BASE_URL: "https://local.api.selectiva.org/" + VERSION,
  PUBLIC_BASE_URL: "https://local.api.selectiva.org/" + VERSION + "/public",
};
exports.SITE_KEY = "6LfMmDUaAAAAAKMdEFwLDEelE63k3-z48Zmskfg9";
exports.ENTITIES = {
  CAUSE: "causes",
  GET_CartItem: "getCartItem",
  LOCATIONS: "locations",
  SEARCH: "search",
  LOGIN_OAUTH: "login",
  FORGOTPASS: "forgot",
  VERIFY_OTP: "verifyOtp",
  NEW_PASSWORD: "newPassword",
  CART_ITEM: "cart",
  Login: "auth",
  SignUp: "donors",
  COROUSAL: "cms",
  STATS: "statistics",
  DONOR: "donors",
  TRANSACTION: "transactionLineItems",
  MEDIA: "upload",
  STARTCAMPAIGN: "startcampaign",
  COUNTRY: "country",
  STATE: "state",
  CATEGORY: "category",
  TRANSACTIONS: "transactions",
  CART: "cartItem",
  DELETE: "delete",
  MYCONTRIBUTION: "transactions",
  Organization: "organizations",
  CAPTCHA: "captcha",
};
exports.API_STATUS = {
  SUCCESS: "success",
  FAIL: "fail",
};
exports.EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
exports.PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
exports.USER_NAME_REGEX = /^[a-zA-Z ]{2,30}$/;
exports.PHONE_REGEX = /^[a-zA-Z ]{1,30}$/;
exports.ONLY_ALPHABETS_REGEX = /^[A-Za-z]+/;
exports.VALIDATION_MESSAGES = {
  FIELD_REQUIRED: "This field is required.",
  INVALID_EMAIL:
    "You have entered an invalid email address. (e.g., yourname@example.com). Please try again.",
  INVALID_PASSWORD:
    "Password must contain at least 8 characters, including upper/lower case, numbers, & special characters.",
  INVALID_NAME: "Must be between 3-30 characters long.",
  CONFIRM_PASSWORD_MATCH: "Password & Confirm password must be match.",
  PROFILE: "Your profile has been updated successfully.",
  DONAR_TYPE: "Choose at least one donor type.",
  INCORRECT_VERIFICATION: "Incorrect verification code.",
  OTP_FIELD_BLANK: "Please do not leave this field blank.",
  OTP_DIGIT_VALIDATION: "Please enter a 6-digit code.",
  ONLY_ALPHABETS: "Only alphabets allowed.",
  Failed_Status: "Something went worng.Please try again!.",
};
exports.TOAST_STATUS = {
  CREATE: "Create",
  ERROR: "Error",
};
exports.TOAST_MESSAGES = {
  USER: {
    CREATE: "User created successfully",
    UPDATE: "User updated successfully",
    INACTIVE: "User inactivated successfully",
    ACTIVE: "User activated successfully",
    CAMPAIGN: "Campaign sent successfully.",
  },
};
exports.HOMEPAGE_CAUSE_LIMIT = 3;
exports.EXPLORE_CAUSE_LIMIT = 6;
exports.CAUSE_SHARE_URL = "https://selectiva.org/cause/";
exports.DEFAULT_META_TITLE = "Selectiva.org | A world of smiles, together!";
exports.DEFAULT_META_DESCRIPTION =
  "We provide a platform where schools, Nonprofits & individuals can raise funds with minimal efforts. We welcome you (Donors) to give your help to those who are in need. Donate Now!";

exports.DEFAULT_META_IMAGE =
  "https://selectiva.com/95ec61e863a14207fec2a7c91e1e41d1.png";

exports.SELECTIVA_LOGO = "/selectiva-logo.png";

exports.STRWINDOWFEATURES =
  "toolbar=no, menubar=no, width=600, height=700, top=100, left=100";
exports.TOGGLE_CAUSE_LIMIT = {
  ON: 9,
  OFF: 6,
};

exports.CAUSE_MEDIA_DIMENSIONS = {
  cardImage: "350X250",
  causeDetailBannerImage: "1520X384",
  galleryImage: "670X342",
  galleryThumbnailImage: "120X65",
};
