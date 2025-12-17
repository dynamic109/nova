# Nova - Crypto to Cash Conversion Platform

A modern web application for converting cryptocurrencies to fiat currencies with a streamlined checkout process.

## 🚀 Features

- **Multi-Crypto Support**: Convert ETH, BNB, Celo, and Ton to various fiat currencies
- **Real-time Conversion**: Automatic calculation with current exchange rates
- **Multi-step Checkout**: Guided process for crypto-to-cash transactions
- **Form Validation**: Robust validation using Zod schemas
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Accessible UI**: Built with Shadcn UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nova
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Build for Production

```bash
npm run build
npm run start
```


## 🔄 Key Functionalities

### Conversion Logic
- Automatic crypto-to-fiat conversion using predefined exchange rates
- Support for multiple fiat currencies (USD, EUR, GBP, NGN, JPY, MXN, ZAR)
- Real-time calculation updates

### Checkout Flow
1. **Crypto Selection**: Choose cryptocurrency and amount
2. **Bank Details**: Enter recipient banking information
3. **Personal Details**: Provide personal information
4. **Send Crypto**: Final confirmation and transaction


## ⚠️ Assumptions & Trade-offs

### Data & APIs
- **Exchange Rates**: Uses custom exchange rates
  - *Trade-off*: Not real-time; requires manual updates
  - *Assumption*: Rates remain relatively stable between updates

- **Crypto Options**: Limited to ETH, BNB, Celo, and Ton
  - *Trade-off*: Not extensible without code changes
  - *Assumption*: These are the primary supported cryptocurrencies

### UI/UX Trade-offs
- **Loading States**: Simple setTimeout-based loading (1 second)
  - *Trade-off*: Not representative of real transaction times
  - *Assumption*: Provides adequate user feedback for demo

- **Navigation**: Uses Next.js router with query params for checkout steps
  - *Trade-off*: State not preserved on page refresh
  - *Assumption*: Users complete checkout in single session

## 🚀 Deployment

The application can be deployed to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
```

Deploy the `.next` folder and `public` directory.

