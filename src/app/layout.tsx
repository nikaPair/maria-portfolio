// Root layout is minimal — the [locale] layout handles HTML, body, providers
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
