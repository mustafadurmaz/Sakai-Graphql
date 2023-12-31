import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Layout from "../../../layout/layout";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

interface AppLayoutProps {
  children: React.ReactNode;
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// export default async function AppLayout({ children, params: { locale } }: any) {
//   let messages;
//   try {
//     messages = (await import(`../../messages/${locale}.json`)).default;
//   } catch (error) {
//     notFound();
//   }
//   return (
//     <html lang={locale}>
//       <body>
//         <Layout>
//           {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
//             {children}
//           {/* </NextIntlClientProvider> */}
//         </Layout>
//       </body>
//     </html>
//   );

export default async function AppLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  console.log(locale);

  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <Layout>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Layout>
      </body>
    </html>
  );
}
