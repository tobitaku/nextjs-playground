import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

const ExamplePage = ({
  mdxSource,
}: {
  mdxSource: MDXRemoteSerializeResult;
}) => {
  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export const getStaticProps = async () => {
  const mdxSource = await serialize('some *mdx* content: Hallo');
  return { props: { mdxSource } };
};

export default ExamplePage;
