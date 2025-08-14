
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('./home'));

export default async function Page(props) {
  const params = await props.params;

  const {
    lang
  } = params;

  // const res = await fetch('https://zscaler-pricing-tool-ui.pages.dev/api/getPricesData', {
  //   headers: {
  //     "x-api-token": process.env.NEXT_PUBLIC_API_SECRET_TOKEN
  //   },
  //   cache: "no-store", // Ensure fresh data if needed
  // });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }

  // const data = await res.json();
  return (
    <div className='w-[98%] min-h-[100vh] p-0 mx-auto xsm:w-[400px] lg:w-full lg:p-4'>
      <Home lang={lang} />
    </div>
  );
}
