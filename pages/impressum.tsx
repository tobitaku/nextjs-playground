import Head from '@/components/Head';
import StaticPageHeadline from '@/components/static/StaticPageHeadline';
import StaticPageLayout from '@/components/static/StaticPageLayout';
import StaticPageSection from '@/components/static/StaticPageSection';

const Imprint = () => (
  <StaticPageLayout>
    <Head title="Tobias Ziegler | Impressum" noindex />
    <StaticPageHeadline variant="h1">Impressum</StaticPageHeadline>

    <StaticPageSection>
      <StaticPageHeadline variant="h2">
        Angaben gem&auml;&szlig; &sect; 5 TMG
      </StaticPageHeadline>
      <div>
        <p>Tobias Ziegler</p>
        <p>Simon-Sch&ouml;ffel-Stra&szlig;e 12</p>
        <p>90427 N&uuml;rnberg</p>
      </div>
    </StaticPageSection>

    <StaticPageSection>
      <StaticPageHeadline variant="h2">Kontakt</StaticPageHeadline>
      <div>
        <p>Telefon: +49 151 42345482</p>
        <p>E-Mail: me@tobiasziegler.dev</p>
      </div>
    </StaticPageSection>

    <StaticPageSection>
      <StaticPageHeadline variant="h2">
        Redaktionell verantwortlich
      </StaticPageHeadline>
      <p>Tobias Ziegler</p>
    </StaticPageSection>

    <StaticPageSection>
      <StaticPageHeadline variant="h2">EU-Streitschlichtung</StaticPageHeadline>
      <p>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{' '}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
    </StaticPageSection>

    <StaticPageSection>
      <StaticPageHeadline variant="h2">
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </StaticPageHeadline>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p className="mt-8">
        Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
      </p>
    </StaticPageSection>
  </StaticPageLayout>
);

export default Imprint;
