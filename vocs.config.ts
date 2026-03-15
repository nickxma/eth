import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Learn Ethereum',
  titleTemplate: '%s — Learn Ethereum',
  description: 'An educational resource covering Ethereum\'s real-world use cases, starting with payments infrastructure and stablecoins.',
  aiCta: false,
  basePath: '/eth',
  iconUrl: '/favicon.svg',
  theme: {
    accentColor: { light: '#0d9488', dark: '#2dd4bf' },
    colorScheme: 'system',
  },
  font: {
    google: 'Inter',
  },
  markdown: {
    code: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
    },
  },
  topNav: [
    { text: 'Learn', link: '/learn', match: '/learn' },
    { text: 'Blog', link: '/blog' },
  ],
  sidebar: {
    '/learn': [
      { text: 'Home', link: '/learn' },
      {
        text: 'Ethereum for Payments',
        items: [
          { text: 'Overview', link: '/learn/ethereum-for-payments' },
          { text: 'Settlement & Finality', link: '/learn/ethereum-for-payments/settlement' },
          { text: 'Account Abstraction', link: '/learn/ethereum-for-payments/account-abstraction' },
          { text: 'Stablecoins on Ethereum', link: '/learn/ethereum-for-payments/stablecoins' },
          { text: 'L2 Scaling', link: '/learn/ethereum-for-payments/l2-scaling' },
          { text: 'Programmable Money', link: '/learn/ethereum-for-payments/programmable-money' },
        ],
      },
      {
        text: 'Stablecoin Use Cases',
        items: [
          { text: 'Overview', link: '/learn/use-cases' },
          { text: 'Remittances', link: '/learn/use-cases/remittances' },
          { text: 'Global Payouts', link: '/learn/use-cases/global-payouts' },
          { text: 'Payroll', link: '/learn/use-cases/payroll' },
          { text: 'Embedded Finance', link: '/learn/use-cases/embedded-finance' },
          { text: 'Microtransactions', link: '/learn/use-cases/microtransactions' },
          { text: 'Agentic Commerce', link: '/learn/use-cases/agentic-commerce' },
        ],
      },
    ],
  },
  blogDir: './pages/blog',
})
