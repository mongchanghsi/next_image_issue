import { Montserrat } from "next/font/google";

/**
 * Change the font here and it will apply to other pages
 */
const baseFont = Montserrat({
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default baseFont;
