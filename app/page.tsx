import About from "@/shared/components/About";
import Banner from "@/shared/components/Banner";
import Beautiful from "@/shared/components/Beautiful";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Banner />
      <About />
      <Beautiful />
    </div>
  );
}
