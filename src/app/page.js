import Banner from "@/components/homepage/Banner/Banner";
import Courses from "@/components/homepage/Courses/Courses";
import Services from "@/components/homepage/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    
      <main>
       <Banner></Banner>
        <Courses></Courses>
        <Services></Services>
      </main>
      
    
  );
}
