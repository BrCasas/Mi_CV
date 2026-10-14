import React from 'react';

export const metadata = {
  title: 'Mi CV - Brandon Casasola',
  description: 'Currículum profesional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}