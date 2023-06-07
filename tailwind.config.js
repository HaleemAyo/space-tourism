/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html" , "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        "homeDesktop": 'url("/src/components/homeFolder/homeImage/homeDesktopBg.jpg")',
        "homeTablet": 'url("/src/components/homeFolder/homeImage/homeTabletBg.jpg")',
        "homeMobile": 'url("/src/components/homeFolder/homeImage/homeMobileBg.jpg")',

        "destinationDesktop":'url("/src/components/destinationFolder/destinationImages/destinationDesktopBg.jpg")',
        "destinationTablet":'url("/src/components/destinationFolder/destinationImages/destinationTabletBg.jpg")',
        "destinationMobile":'url("/src/components/destinationFolder/destinationImages/destinationMobileBg.jpg")',

        "crewDeskop":'url("/src/components/crewFolder/crewImages/crewDesktopBg.jpg")',
        "crewTablet":'url("/src/components/crewFolder/crewImages/crewTabletBg.jpg")',
        "crewMobile":'url("/src/components/crewFolder/crewImages/crewMobileBg.jpg")',

        "techDesktop":'url("/src/components/technologyFolder/techImage/techDesktopBg.jpg")',
        "techTablet":'url("/src/components/technologyFolder/techImage/techTabletBg.jpg")',
        "techMobile":'url("/src/components/technologyFolder/techImage/techMobileBg.jpg")',
      },
      colors:{
        "customBlack":"#0B0D17",
        "customPurple": "#D0D6F9",
        "customCream": "#FFFFFF"
      },
      fontFamily:{
      'sans': ['Barlow Condensed', 'sans'],
      'serif': ['Bellefair','serif'],
      },
      fontSize:{
        "biggestText":"150px",
        "biggerText":"100px",
        "Text":"80px",
        "techText":"40px",
        "bigText":"56px",
        "smallText":"32px",
        "smallerText":"28px",
        "smallestText":"15px",
      },
      letterSpacing:{
        "custom":"3px"
      },
      width:{
        "tabletWidth":"450px",
        "desktopWidth":"57.6%",
        "hrWidth":"30%",
        "buttonWidth":"150px",
        "globeMobileWidth":"170px",
        "globeTabletWidth":"300px",
        "globeDesktopWidth":"445px",
        "customMobileWidth":"177px",
        "customTabletWidth":"456.37px",
        "customDesktopWidth":"568px",
        "pagnationWidth":"10px"
      },
      height:{
        "buttonHeight":"150px",
        "globeMobileHeight":"170px",
        "globeTabletHeight":"300px",
        "globeDesktopHeight":"445px",
        "customMobileHeight":"222px",
        "customTabletHeight":"572px",
        "customDesktopHeight":"712px",
        "techTabletHeight":"310px",
        "techDesktopHeight":"527px",
        "pagnationHeight":"10px"
      },
    },
  },
  plugins: [],
}

