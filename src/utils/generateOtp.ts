import crypto from "crypto";

// 6-digit numeric OTP, sent to the user's email in plain text
export const generateOtp = () => crypto.randomInt(100000, 999999).toString();

// Hash anything (OTP or reset token) before storing it in the DB, so a DB
// leak never exposes a usable OTP/token directly.
export const hashToken = (token : string) =>
  crypto.createHash("sha256").update(token).digest("hex");

export const generateResetToken = () => {
  const rawToken = crypto.randomBytes(32).toString("hex"); // sent to user
  const hashedToken = hashToken(rawToken); // stored in DB
  return { rawToken, hashedToken };
};