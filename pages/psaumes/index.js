import Psaume from '../../src/components/Psaume';


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
    },
  };
}
export default PsaumesPage;
