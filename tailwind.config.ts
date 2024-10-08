import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '300px',
        mx: '350px',
        xm: '410px',
        md: '768px',
        lg: '876px',
        xl: '1440px',
      },
      backgroundImage: {
        'Home-Desktop': "url('/assets/home/background-home-desktop.jpg')",
        'Home-Tablet': "url('/assets/home/background-home-tablet.jpg')",
        'Home-Moblie': "url('/assets/home/background-home-mobile.jpg')",
        'Destination-Desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'Destination-Tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'Destination-Moblie': "url('/assets/destination/background-destination-tablet.jpg')",
        'Crew-Desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'Crew-Tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'Crew-Moblie': "url('/assets/crew/background-crew-mobile.jpg')",
        'Technology-Desktop': "url('/assets/technology/background-technology-desktop.jpg')",
        'Technology-Tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'Technology-Mobile': "url('/assets/technology/background-technology-mobile.jpg')",
      },
      colors: {
        'Line': 'rgba(151, 151, 151, 255)',
        'HomeText': 'rgba(208, 214, 249, 255)',
      }
    },
  },
  plugins: [],
};
export default config;
