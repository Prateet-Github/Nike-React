import {
  Hero,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  SuperQuality,
  CustomerReviews,
  Subscribe,
} from "./Sections";

import Nav from "./Components/Nav";

const App = () => (
  <main className="relative">
   <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding ">
      <PopularProducts />
    </section>
    <section className="padding ">
      <SuperQuality />
    </section>
    <section className="padding padding-x py-10">
      <Services />
    </section>
    <section className="padding ">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full ">
      <Subscribe />
    </section>
    <section className="padding-x bg-black pb-8 padding-t text-coral-red">
      <Footer />
    </section>
  </main>
);

export default App;
