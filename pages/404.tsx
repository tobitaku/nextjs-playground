import Head from '@/components/Head';

const Page404 = () => (
  <>
    <Head title="Tobias Ziegler | 404" noindex />
    <div className="flex h-screen w-screen items-center justify-center p-8">
      <h1 className="my-40 text-5xl font-extrabold tracking-tighter">
        404 - Seite nicht gefunden
      </h1>
    </div>
  </>
);

export default Page404;
