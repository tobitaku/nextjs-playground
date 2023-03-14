import NextHead from 'next/head';

const Head = ({
  title,
  description,
  noindex,
  og,
  structuredData,
}: {
  title: string;
  description?: string;
  noindex?: boolean;
  og?: boolean;
  structuredData?: any;
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    {description && <meta name="description" content={description} />}
    {noindex && <meta name="robots" content="noindex" />}
    {og && (
      <>
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content="https://tobiasziegler.dev/logo-main.webp"
        />
        {description && (
          <meta property="og:description" content={description} />
        )}
      </>
    )}
    {structuredData && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
        key="product-jsonld"
      />
    )}
  </NextHead>
);

export default Head;
