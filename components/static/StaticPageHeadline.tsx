const StaticPageHeadline = ({
  variant,
  children,
}: {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  children: string;
}) => {
  const getVariant = () => {
    switch (variant) {
      case 'h1':
        return <h1 className="my-8 text-5xl font-extrabold">{children}</h1>;
      case 'h2':
        return <h2 className="my-4 text-3xl font-bold">{children}</h2>;
      case 'h3':
        return <h3 className="my-4 text-2xl font-bold">{children}</h3>;
      case 'h4':
        return <h4 className="my-4 text-xl font-semibold">{children}</h4>;
    }
  };
  const headlineVariant = getVariant();

  return <>{headlineVariant}</>;
};

export default StaticPageHeadline;
