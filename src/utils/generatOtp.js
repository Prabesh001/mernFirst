import otpGenerator from "otp-generator";

const generateOtp = () => {
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  console.log(otp);
  return otp;
};
export { generateOtp };
