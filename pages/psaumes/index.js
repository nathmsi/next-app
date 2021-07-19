import Psaume from '../../src/components/Psaume';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const PsaumesPage = () => {

  return (
    <div>
      <Psaume />
    </div>
  )
}
export async function getStaticProps({ locale }) {
  return {
    props: {
          ...(await serverSideTranslations(locale, ['common', 'footer'])),

      // Will be passed to the page component as props
    },
  };
}
export default PsaumesPage;
