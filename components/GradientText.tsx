const GradientText = ({
  gradient,
  children,
}: {
  gradient: 'indigo' | 'amber';
  children: string;
}) => {
  const getGradient = () => {
    switch (gradient) {
      case 'amber':
        return 'from-amber-500 via-fuchsia-500 to-pink-500';
      default:
        return 'from-indigo-500 via-purple-500 to-pink-500';
    }
  };
  const gradientVariant = getGradient();

  return (
    <span
      className={`bg-gradient-to-r bg-clip-text text-transparent ${gradientVariant}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
