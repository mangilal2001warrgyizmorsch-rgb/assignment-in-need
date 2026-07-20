import { Suspense } from "react";
import { AuthSlider } from "@/components/auth/AuthSlider";

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={null}>
      <AuthSlider initialMode="forgot" />
    </Suspense>
  );
}
