import { FILTERS } from "./FilterConstants";
import applewatch from "./assets/applewatch9.png";
import airpods2nd from "./assets/airpods2nd.png";
import airpodsmax from "./assets/airpodsmax.png";
import ipadmini from "./assets/ipadmini.jpg";
import magicmouse from "./assets/magicmouse.jpg";
import galaxywatch from "./assets/galaxywatch.jpg";
import fitbitversa from "./assets/fitbitversa.png";
import nestaudio from "./assets/nestaudio.png";
import pixeltablet from "./assets/pixeltablet.jpg";
import pixelbudspro from "./assets/pixelbudspro.jpg";
import pixelbudsa from "./assets/pixelbudsa.jpg";
import pixelwatch from "./assets/pixelwatch.png";
import budslive from "./assets/budslive.jpg";
import smartkeyboard from "./assets/smartkeyboard.png";
import galaxytabs8 from "./assets/galaxytabs8.jpg";
import buds2pro from "./assets/buds2pro.webp";

export const placeholderCardData = [
  // Apple
  {
    name: "Apple Watch 9",
    description: "Comfortable, High Tech, New High-Tech Watch Chip",
    brand: FILTERS.brands.APPLE,
    type: FILTERS.types.WATCHES,
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.CHINA,
    imageUrl: applewatch,
    currentPrice: "749",
    sale: "",
  },
  {
    name: "AirPods Max",
    description: "",
    brand: FILTERS.brands.APPLE,
    type: FILTERS.types.HEADPHONES,
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.CHINA,
    imageUrl: airpodsmax,
    currentPrice: "549",
    sale: FILTERS.sale.ON_SALE,
  },
  {
    name: "iPad Mini",
    description: "",
    brand: FILTERS.brands.APPLE,
    type: FILTERS.types.TABLET,
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.CHINA,
    imageUrl: ipadmini,
    currentPrice: "549",
    sale: "",
  },
  {
    name: "Magic Mouse",
    description: "",
    brand: FILTERS.brands.APPLE,
    type: FILTERS.types.ACCESSORIES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.CANADA,
    imageUrl: magicmouse,
    currentPrice: "129",
    sale: "",
  },
  {
    name: "AirPods 2nd",
    description: "",
    brand: FILTERS.brands.APPLE,
    type: FILTERS.types.HEADPHONES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.CHINA,
    imageUrl: airpods2nd,
    currentPrice: "129",
    sale: FILTERS.sale.ON_SALE,
  },

  // Samsung
  {
    name: "Galaxy Watch",
    description: "",
    brand: FILTERS.brands.SAMSUNG,
    type: FILTERS.types.WATCHES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: galaxywatch,
    currentPrice: "399",
    sale: "",
  },
  {
    name: "Buds 2 Pro",
    description: "",
    brand: FILTERS.brands.SAMSUNG,
    type: FILTERS.types.HEADPHONES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: buds2pro,
    currentPrice: "229",
    sale: "",
  },
  {
    name: "Galaxy Tab S8",
    description: "",
    brand: FILTERS.brands.SAMSUNG,
    type: FILTERS.types.TABLET,
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: galaxytabs8,
    currentPrice: "749",
    sale: "",
  },
  {
    name: "Smart Keyboard",
    description: "",
    brand: FILTERS.brands.SAMSUNG,
    type: FILTERS.types.ACCESSORIES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.US,
    imageUrl: smartkeyboard,
    currentPrice: "49",
    sale: "",
  },
  {
    name: "Buds Live",
    description: "",
    brand: FILTERS.brands.SAMSUNG,
    type: FILTERS.types.HEADPHONES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: budslive,
    currentPrice: "139",
    sale: "",
  },

  // Google
  {
    name: "Pixel Watch",
    description: "",
    brand: FILTERS.brands.GOOGLE,
    type: FILTERS.types.WATCHES,
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: pixelwatch,
    currentPrice: "649",
    sale: FILTERS.sale.ON_SALE,
  },
  {
    name: "Pixel Buds A",
    description: "",
    brand: FILTERS.brands.GOOGLE,
    type: FILTERS.types.HEADPHONES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: pixelbudsa,
    currentPrice: "99",
    sale: "",
  },
  {
    name: "Pixel Buds Pro",
    description: "",
    brand: FILTERS.brands.GOOGLE,
    type: FILTERS.types.HEADPHONES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.US,
    imageUrl: pixelbudspro,
    currentPrice: "199",
    sale: "",
  },
  {
    name: "Pixel Tablet",
    description: "",
    brand: FILTERS.brands.GOOGLE,
    type: FILTERS.types.TABLET,
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.CHINA,
    imageUrl: pixeltablet,
    currentPrice: "599",
    sale: "",
  },
  {
    name: "Nest Audio",
    description: "",
    brand: FILTERS.brands.GOOGLE,
    type: FILTERS.types.ACCESSORIES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: nestaudio,
    currentPrice: "129",
    sale: "",
  },

  // Other
  {
    name: "Fitbit Versa",
    description: "",
    brand: FILTERS.brands.OTHER,
    type: FILTERS.types.WATCHES,
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.OTHER,
    imageUrl: fitbitversa,
    currentPrice: "229",
    sale: FILTERS.sale.ON_SALE,
  }
]