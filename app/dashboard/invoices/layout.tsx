import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Invoices',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
