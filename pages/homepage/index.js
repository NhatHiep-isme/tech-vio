import AboutUs from "../../public/components/pages/homepage/about-us/AboutUs";
import HomeBanner from "../../public/components/pages/homepage/banner/Banner";
import Counter from "../../public/components/pages/homepage/counter/Counter";
import Testimonial from "../../public/components/pages/homepage/testimonial/Testimonial";
import WhatWeProvide from "../../public/components/pages/homepage/what-we-provide/WhatWeProvide";
import WhyChooseUs from "../../public/components/pages/homepage/why-choose-us/WhyChooseUs";
import WhyTrustUs from "../../public/components/pages/homepage/why-trust-us/WhyTrustUs";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <WhatWeProvide />
      <AboutUs />
      <WhyChooseUs />
      <WhyTrustUs />
      <Counter />
      <Testimonial />
    </>
  );
}
