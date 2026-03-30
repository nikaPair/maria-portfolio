import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import "../globals.css";

const manrope = Manrope({
    subsets: ["latin", "cyrillic"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://lubimova.site"),
    title: "Portfolio - Maria Lubimova | Product UX/UI Designer",
    description:
        "Portfolio of UX/UI designer Maria Lubimova. 3 years in product design: design systems, UX Research, prototyping.",
    icons: {
        icon: "/images/avatar.png",
    },
    openGraph: {
        images: [
            {
                url: "/opengraph-image.jpg",
                alt: "Maria Lubimova",
            },
        ],
    },
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={manrope.variable}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
