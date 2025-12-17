export const tabItems = [
  {
    label: "Crypto to cash",
    value: "crypto-to-cash",
  },
  {
    label: "Cash to crypto",
    value: "cash-to-crypto",
  },
  {
    label: "Crypto to fiat loan",
    value: "crypto-to-loan",
  },
];

export const cryptoOptions = [
  { code: "ETH", name: "Ethereum", symbol: "/eth_icon.svg" },
  { code: "BNB", name: "Binance Coin", symbol: "/bnb_icon.svg" },
  { code: "Celo", name: "Polygon", symbol: "/celo_icon.svg" },
  { code: "Ton", name: "Litecoin", symbol: "/ton_icon.svg" },
];

export const currencyOptions = [
  { code: "NGN", name: "Nigerian Naira", countryCode: "NG" },
  { code: "USD", name: "US Dollar", countryCode: "US" },
  { code: "EUR", name: "Euro", countryCode: "EU" },
  { code: "GBP", name: "British Pound", countryCode: "GB" },
  { code: "JPY", name: "Japanese Yen", countryCode: "JP" },
  { code: "MXN", name: "Mexican Peso", countryCode: "MX" },
  { code: "ZAR", name: "South African Rand", countryCode: "ZA" },
];

export const exchangeOptions = [
  {
    value: "metamask",
    label: "Metamask",
    icon: "/metamask.svg",
  },
  {
    value: "rainbow",
    label: "Rainbow",
    icon: "/rainbow.svg",
  },
  {
    value: "wallet-connect",
    label: "WalletConnect",
    icon: "/wallet_connect.svg",
  },
  {
    value: "others",
    label: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    icon: "/Wallet.svg",
  },
];

export const bankOptions = [
  { code: "GTB", name: "Guaranty Trust Bank" },
  { code: "ACCESS", name: "Access Bank" },
  { code: "FIRSTBANK", name: "First Bank" },
  { code: "ZENITH", name: "Zenith Bank" },
  { code: "UBA", name: "United Bank for Africa" },
];

export const countryOptions = [
  { code: "NG", dial: "+234", name: "Nigeria" },
  { code: "US", dial: "+1", name: "United States" },
  { code: "GB", dial: "+44", name: "United Kingdom" },
  { code: "GH", dial: "+233", name: "Ghana" },
  { code: "KE", dial: "+254", name: "Kenya" },
  { code: "ZA", dial: "+27", name: "South Africa" },
];

export const exchangeRates: Record<string, Record<string, number>> = {
  ETH: { USD: 2939.01, EUR: 2505.77, GBP: 2201.55, NGN: 4279252, JPY: 457339, MXN: 52838, ZAR: 49120 },
  BNB: { USD: 861.27, EUR: 734.31, GBP: 645.16, NGN: 1254031, JPY: 134023, MXN: 15484.01, ZAR: 14394.71 },
  Celo: { USD: 0.14, EUR: 0.12, GBP: 0.10, NGN: 198, JPY: 21, MXN: 2.44, ZAR: 2.27 },
  Ton: { USD: 1.52, EUR: 1.29, GBP: 1.14, NGN: 2207, JPY: 236, MXN: 27.25, ZAR: 25.33 },
};
