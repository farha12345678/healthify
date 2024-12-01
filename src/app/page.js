import Banner from "@/components/homepage/Banner/Banner";
import Courses from "@/components/homepage/Courses/Courses";
import Reviews from "@/components/homepage/Reviews/Reviews";
import Services from "@/components/homepage/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    
      <main>
       <Banner></Banner>
        <Courses></Courses>
        <Services></Services>
        <Reviews></Reviews>
      </main>
      
    
  );
}
