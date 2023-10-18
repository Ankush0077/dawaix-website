const CryptoJS = require('crypto-js')

const REFERRAL_KEY = "INDIAN INSTITUTE OF TECHNOLOGY(IIT) KANPUR"

const cfg = {
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
};

/*
  * Encrypt a derived hd private key with a given pin and return it in Base64 form
  */
const getReferralCode = (phoneNumber) => {
  return CryptoJS.AES.encrypt(phoneNumber, REFERRAL_KEY).toString();
};


/**
 * Decrypt an encrypted message
 * @param encryptedBase64 encrypted data in base64 format
 * @param key The secret key
 * @return The decrypted content
 */
const getPhoneNumber = (encryptedBase64) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, REFERRAL_KEY);
  if (decrypted) {
    try {
      console.log(decrypted);
      const str = decrypted.toString(CryptoJS.enc.Utf8);
      if (str.length > 0) {
        return str;
      } else {
        return 'Please enter a valid code.';
      } 
    } catch (e) {
      return 'Some Error Occurred';
    }
  }
  return 'Some Error Occurred';
};

export { getReferralCode, getPhoneNumber}
