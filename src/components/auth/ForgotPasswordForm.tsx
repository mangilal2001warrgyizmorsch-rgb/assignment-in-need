"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-[#e1c0b1] bg-white py-3 pl-10 pr-4 text-[15px] text-[#191c1e] placeholder:text-[#594136]/60 transition-all duration-300 focus:border-[#6935db] focus:outline-none focus:ring-2 focus:ring-[#6935db]/20";

const passwordInputClass =
  "w-full rounded-lg border border-[#e1c0b1] bg-white py-3 pl-10 pr-12 text-[15px] text-[#191c1e] placeholder:text-[#594136]/60 transition-all duration-300 focus:border-[#6935db] focus:outline-none focus:ring-2 focus:ring-[#6935db]/20";

const labelClass = "text-sm font-semibold text-[#191c1e]";

function readMessage(data: unknown, fallback: string) {
  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    if (typeof record.message === "string") return record.message;
    if (typeof record.error === "string") return record.error;
  }
  return fallback;
}

interface ForgotPasswordFormProps {
  onSwitchMode: (mode: "login" | "register" | "forgot", path: string) => void;
}

export function ForgotPasswordForm({ onSwitchMode }: ForgotPasswordFormProps) {
  const [forgotStep, setForgotStep] = useState<1 | 2 | 3>(1);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotOtp, setForgotOtp] = useState("");
  const [forgotResetToken, setForgotResetToken] = useState("");
  const [forgotPassword, setForgotPassword] = useState("");
  const [forgotConfirmPassword, setForgotConfirmPassword] = useState("");
  const [showForgotPwd, setShowForgotPwd] = useState(false);
  const [showForgotConfirmPwd, setShowForgotConfirmPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotStep1Submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/app/forgot-password", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok || (data && data.success === false)) {
        throw new Error(readMessage(data, "Unable to send reset OTP. Please check your email."));
      }

      toast.success(readMessage(data, "Password reset OTP sent to your email."));
      setForgotStep(2);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotStep2Submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/app/verify-forgot-password-otp", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail, otp: forgotOtp }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok || (data && data.success === false)) {
        throw new Error(readMessage(data, "Invalid or expired OTP. Please try again."));
      }

      const token = data?.reset_token || data?.token || data?.data?.reset_token || "";
      if (!token) {
        throw new Error("Reset token not received. Please request OTP again.");
      }

      setForgotResetToken(token);
      toast.success(readMessage(data, "OTP verified successfully. Please enter your new password."));
      setForgotStep(3);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotStep3Submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (forgotPassword !== forgotConfirmPassword) {
      toast.error("New password and confirm password must match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/app/reset-password", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: forgotEmail,
          reset_token: forgotResetToken,
          password: forgotPassword,
          password_confirmation: forgotConfirmPassword,
        }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok || (data && data.success === false)) {
        throw new Error(readMessage(data, "Unable to reset password. Please try again."));
      }

      toast.success(readMessage(data, "Password reset successfully! Please login."));
      setForgotEmail("");
      setForgotOtp("");
      setForgotResetToken("");
      setForgotPassword("");
      setForgotConfirmPassword("");
      setForgotStep(1);
      onSwitchMode("login", "/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-form-container auth-forgot-container flex flex-col justify-center bg-white p-6 sm:p-8 lg:p-12">
      {forgotStep === 1 && (
        <>
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#f3edff]">
              <KeyRound className="h-8 w-8 text-[#6935db]" />
            </div>
            <h2 className="mb-2 text-[26px] font-extrabold leading-tight text-[#a04100]">
              Forgot Password?
            </h2>
            <p className="text-[14px] leading-relaxed text-[#594136]">
              Enter your registered email address to receive a password reset OTP.
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleForgotStep1Submit}>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="forgot-email">
                Email Address
              </label>
              <div className="group relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#594136] transition-colors duration-200 group-focus-within:text-[#6935db]" />
                <input
                  className={inputClass}
                  id="forgot-email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                />
              </div>
            </div>

            <button
              className="btn-shutter-orange-open mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-4 text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-70 border-none cursor-pointer"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Sending OTP..." : "Send Reset OTP"}
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </>
      )}

      {forgotStep === 2 && (
        <>
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
              <ShieldCheck className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="mb-2 text-[26px] font-extrabold leading-tight text-[#a04100]">
              Verify OTP
            </h2>
            <p className="text-[14px] leading-relaxed text-[#594136]">
              We sent a 6-digit OTP to <span className="font-bold text-[#6935db]">{forgotEmail}</span>
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleForgotStep2Submit}>
            <div className="flex flex-col gap-2">
              <label className={labelClass} htmlFor="forgot-otp">
                Enter 6-Digit OTP
              </label>
              <div className="group relative">
                <KeyRound className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#594136] transition-colors duration-200 group-focus-within:text-[#6935db]" />
                <input
                  className={`${inputClass} tracking-widest font-mono text-center text-lg`}
                  id="forgot-otp"
                  name="otp"
                  placeholder="000000"
                  required
                  maxLength={6}
                  type="text"
                  value={forgotOtp}
                  onChange={(e) => setForgotOtp(e.target.value.replace(/[^0-9]/g, ""))}
                />
              </div>
            </div>

            <button
              className="btn-shutter-orange-open mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-4 text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-70 border-none cursor-pointer"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="flex justify-between items-center text-xs text-[#594136] mt-1">
              <button
                type="button"
                onClick={() => setForgotStep(1)}
                className="text-[#6935db] font-semibold hover:underline flex items-center gap-1 border-none bg-transparent cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Change Email
              </button>
              <button
                type="button"
                onClick={(e) => handleForgotStep1Submit(e as any)}
                className="text-[#a04100] font-semibold hover:underline border-none bg-transparent cursor-pointer"
              >
                Resend OTP
              </button>
            </div>
          </form>
        </>
      )}

      {forgotStep === 3 && (
        <>
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <CheckCircle2 className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="mb-2 text-[26px] font-extrabold leading-tight text-[#a04100]">
              Reset Password
            </h2>
            <p className="text-[14px] leading-relaxed text-[#594136]">
              Create a new password for <span className="font-bold text-[#6935db]">{forgotEmail}</span>
            </p>
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleForgotStep3Submit}>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass} htmlFor="reset-password">
                New Password
              </label>
              <div className="group relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#594136] transition-colors duration-200 group-focus-within:text-[#6935db]" />
                <input
                  className={passwordInputClass}
                  id="reset-password"
                  name="password"
                  placeholder="New password"
                  required
                  type={showForgotPwd ? "text" : "password"}
                  value={forgotPassword}
                  onChange={(e) => setForgotPassword(e.target.value)}
                />
                <button
                  aria-label={showForgotPwd ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#594136] transition-colors duration-200 hover:text-[#191c1e]"
                  onClick={() => setShowForgotPwd((prev) => !prev)}
                  type="button"
                >
                  {showForgotPwd ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass} htmlFor="reset-confirm-password">
                Confirm New Password
              </label>
              <div className="group relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#594136] transition-colors duration-200 group-focus-within:text-[#6935db]" />
                <input
                  className={passwordInputClass}
                  id="reset-confirm-password"
                  name="confirm_password"
                  placeholder="Confirm new password"
                  required
                  type={showForgotConfirmPwd ? "text" : "password"}
                  value={forgotConfirmPassword}
                  onChange={(e) => setForgotConfirmPassword(e.target.value)}
                />
                <button
                  aria-label={showForgotConfirmPwd ? "Hide confirm password" : "Show confirm password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#594136] transition-colors duration-200 hover:text-[#191c1e]"
                  onClick={() => setShowForgotConfirmPwd((prev) => !prev)}
                  type="button"
                >
                  {showForgotConfirmPwd ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              className="btn-shutter-orange-open mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-4 text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-70 border-none cursor-pointer"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Resetting Password..." : "Reset Password"}
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </>
      )}

      <div className="mt-6 border-t border-[#e1e2e5] pt-4 text-center">
        <p className="text-[15px] text-[#594136]">
          Remembered your password?
          <button
            type="button"
            onClick={() => onSwitchMode("login", "/login")}
            className="ml-1 font-semibold text-[#a04100] transition-colors duration-200 hover:text-[#ff7012] border-none bg-transparent cursor-pointer"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
