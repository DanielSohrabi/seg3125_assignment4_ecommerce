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
    brand: FILTERS.brands.APPLE,
    type: FILTERS.types.WATCHES,
    description: "All New, Cutting Edge IP65 Display, With 64GB!",
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.CHINA,
    imageUrl: applewatch,
    currentPrice: "749",
    sale: "",
  },
  {
    name: "AirPods Max",
    brand: FILTERS.brands.APPLE,
    type: FILTERS.types.HEADPHONES,
    description: "Innovative Noise Cancellation Technology, All New Comfort!",
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.CHINA,
    imageUrl: airpodsmax,
    currentPrice: "549",
    sale: FILTERS.sale.ON_SALE,
  },
  {
    name: "iPad Mini",
    description: "Ultrathin 4K OLED Display, 2000 Nits Brightness",
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
    description: "New and Improved Bluetooth 6.0, Maximizing Productivity",
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
    brand: FILTERS.brands.APPLE,
    type: FILTERS.types.HEADPHONES,
    description: "Innovative Noise Cancellation Technology, All New Comfort!",
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.CHINA,
    imageUrl: airpods2nd,
    currentPrice: "129",
    sale: FILTERS.sale.ON_SALE,
  },

  // Samsung
  {
    name: "Galaxy Watch",
    brand: FILTERS.brands.SAMSUNG,
    type: FILTERS.types.WATCHES,
    description: "All New, Cutting Edge IP65 Display, With 64GB!",
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: galaxywatch,
    currentPrice: "399",
    sale: "",
  },
  {
    name: "Buds 2 Pro",
    brand: FILTERS.brands.SAMSUNG,
    type: FILTERS.types.HEADPHONES,
    description: "Innovative Noise Cancellation Technology, All New Comfort!",
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: buds2pro,
    currentPrice: "229",
    sale: "",
  },
  {
    name: "Galaxy Tab S8",
    description: "Ultrathin 4K OLED Display, 2000 Nits Brightness",
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
    description: "New and Improved Bluetooth 6.0, Maximizing Productivity",
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
    brand: FILTERS.brands.SAMSUNG,
    type: FILTERS.types.HEADPHONES,
    description: "Innovative Noise Cancellation Technology, All New Comfort!",
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: budslive,
    currentPrice: "139",
    sale: "",
  },

  // Google
  {
    name: "Pixel Watch",
    brand: FILTERS.brands.GOOGLE,
    type: FILTERS.types.WATCHES,
    description: "All New, Cutting Edge IP65 Display, With 64GB!",
    priceBracket: FILTERS.priceCategory.ABV_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: pixelwatch,
    currentPrice: "649",
    sale: FILTERS.sale.ON_SALE,
  },
  {
    name: "Pixel Buds A",
    brand: FILTERS.brands.GOOGLE,
    type: FILTERS.types.HEADPHONES,
    description: "Innovative Noise Cancellation Technology, All New Comfort!",
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.VIETNAM,
    imageUrl: pixelbudsa,
    currentPrice: "99",
    sale: "",
  },
  {
    name: "Buds Pro ",
    brand: FILTERS.brands.GOOGLE,
    type: FILTERS.types.HEADPHONES,
    description: "Innovative Noise Cancellation Technology, All New Comfort!",
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.US,
    imageUrl: pixelbudspro,
    currentPrice: "199",
    sale: "",
  },
  {
    name: "Pixel Tablet",
    description: "Ultrathin 4K OLED Display, 2000 Nits Brightness",
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
    description: "New and Improved Bluetooth 6.0, Maximizing Productivity",
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
    brand: FILTERS.brands.OTHER,
    type: FILTERS.types.WATCHES,
    description: "All New, Cutting Edge IP65 Display, With 64GB!",
    priceBracket: FILTERS.priceCategory.UND_500,
    country: FILTERS.country.OTHER,
    imageUrl: fitbitversa,
    currentPrice: "229",
    sale: FILTERS.sale.ON_SALE,
  },
];
