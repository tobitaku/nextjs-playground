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
    {description && <meta name="description" content={description} />}
    {noindex && <meta name="robots" content="noindex" />}
    {og && (
      <>
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content="https://tobiasziegler.dev/profile.png"
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
