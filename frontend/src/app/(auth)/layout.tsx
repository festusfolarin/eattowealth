import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Eat To Wealth | Your Simple Guide To Eating Intelligently",
  description:
    "Your roadmap to optimal health. To explore the power of whole, nutrient-dense foods that fuel your body for peak performance.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
