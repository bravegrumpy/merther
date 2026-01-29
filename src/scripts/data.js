export const mainLinks = [
    {
        key: "00_Home",
        href: "/pages",
        text: "Home",
    },
    {
        key: "01_Misunderstood",
        href: "/misunderstood/simple",
        text: "Misunderstood",
    },
    {
        key: "02_Muses",
        href: "/muses",
        text: "Muses",
    },
    {
      key: "03_RapeNotDie",
      href: "/rape-not-die",
      text: "Fires"
    },
    {
      key: "04_Swagger",
      href: "/swagger",
      text: "Swagger"
    },
    {
      key: "05_Fig",
      href: "/fig",
      text: "Fig"
    },
    {
      key: "ZX_OTHER",
      href: "/other/",
      text: "Other Stuff"
    }
    // {
    //     key: "ZY_Auth",
    //     href: "/auth",
    //     text: "Auth"
    // },
    // {
    //     key: "ZZ_Blog",
    //     href:"/blog",
    //     text: "Blog"
    // }
];

export const secondaryLinks = [
    {
        key: "01_Misunderstood_00_Home",
        href: "/pages",
        text: "Home"
    },
    {
        key: "01_Misunderstood_01_MH",
        href: "/misunderstood",
        text: "Misunderstood Index"
    },
    // {
    //     key: "01_Misunderstood_02_NoStyling",
    //     href: "/misunderstood/unstyled",
    //     text: "No Styling"
    // },
    {
        key: "01_Misunderstood_03_Simple",
        href: "/misunderstood/simple",
        text: "Vanilla CSS Styling"
    },
    // {
    //     key: "01_Misunderstood_04_W3C",
    //     href: "/misunderstood/w3Css",
    //     text: "W3.CSS Bootstrap-type styling"
    // },
    // {
    //     key: "01_Misunderstood_05_Tailwindcss",
    //     href: "/misunderstood/tailwindcss",
    //     text: "Tailwindcss"
    // },
    // {
    //     key: "01_Misunderstood_06_AO3Clone",
    //     href: "/misunderstood/ao3",
    //     text: "AO3 Clone"
    // },
    {
        key: "01_Misunderstood_07Print",
        href: "/misunderstood/print",
        text: "Print Friendly Version"
    },
];

export let otherSecLinks = [
  {
    key: "gal",
    href: "/other",
    text: "Other"
  },
  {
    key: "imgs",
    href: "/other/images",
    text: "Images",
  },
  {
    key: "css",
    href: "/other/css_expo",
    text: "CSS Expo",
  },
  {
    key: "tst",
    href: "/other/test",
    text: "TestPage"
  },
  {
    key: "tst2",
    href: "/other/test-again",
    text: "Markdown Test"
  }
]

export const pdfPagesOptions = {
  pages: {
    '/misunderstood/print': {
      throwOnFail: true,
      pdf: {
        format: 'Letter',
        printBackground: false
      }
    },
    '/misunderstood/simple': {
      throwOnFail: true,
      pdf: {
        format: 'LETTER',
        printBackground: false
      }
    },
    '/misunderstood/simple/01_again': {
      throwOnFail: true,
      pdf: {
        format: 'LETTER',
        printBackground: false
      }
    }
  }
}