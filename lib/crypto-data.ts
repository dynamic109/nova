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
  { code: "USD", name: "US Dollar", countryCode: "US" },
  { code: "EUR", name: "Euro", countryCode: "EU" },
  { code: "GBP", name: "British Pound", countryCode: "GB" },
  { code: "JPY", name: "Japanese Yen", countryCode: "JP" },
  { code: "AUD", name: "Australian Dollar", countryCode: "AU" },
  { code: "CAD", name: "Canadian Dollar", countryCode: "CA" },
  { code: "CHF", name: "Swiss Franc", countryCode: "CH" },
  { code: "CNY", name: "Chinese Yuan", countryCode: "CN" },
  { code: "INR", name: "Indian Rupee", countryCode: "IN" },
  { code: "MXN", name: "Mexican Peso", countryCode: "MX" },
  { code: "NGN", name: "Nigerian Naira", countryCode: "NG" },
  { code: "ZAR", name: "South African Rand", countryCode: "ZA" },
  { code: "KES", name: "Kenyan Shilling", countryCode: "KE" },
  { code: "GHS", name: "Ghanaian Cedi", countryCode: "GH" },
  { code: "SGD", name: "Singapore Dollar", countryCode: "SG" },
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
  ETH: { USD: 3500, EUR: 3200, GBP: 2800 },
  BNB: { USD: 600, EUR: 550, GBP: 480 },
  Celo: { USD: 2, EUR: 1.8, GBP: 1.6 },
  Ton: { USD: 5, EUR: 4.5, GBP: 4 },
};
