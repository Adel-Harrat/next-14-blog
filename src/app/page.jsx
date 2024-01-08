import Footer from "@/components/footer/Footer";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Homepage",
  description: "This is the home page",
};

const Home = () => {
  return (
    <>
      <section className="my-10">
        <Container classes={"grid grid-cols-1 md:grid-cols-2"}>
          <div className="flex-1">
            <h1 className="text-6xl md:text-[5rem] font-bold -tracking-wider md:leading-[1]">
              Creative <span className={`text-amber-500`}>Thoughts</span>{" "}
              Agency.
            </h1>

            <p className="text-zinc-300 mt-10 md:max-w-md leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              quas numquam ab at vel ut omnis eaque suscipit animi illo cum
              impedit nostrum quasi, porro quod quo sed quidem hic?
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <button className="bg-amber-500 text-zinc-900 px-10 py-3 rounded-xl text-sm tracking-wider uppercase font-semibold text-center">
                Learn More
              </button>

              <Link
                href="/contact"
                className="bg-white text-zinc-900 px-10 py-3 rounded-xl text-sm tracking-wider uppercase font-semibold text-center"
              >
                Contact
              </Link>
            </div>

            <Image
              src="/brands.png"
              alt="brands"
              height={50}
              width={1000}
              className="grayscale mt-5"
              priority
            />
          </div>

          <div className="mt-10 md:mt-0 flex items-center justify-center ">
            <Image
              src="/hero.png"
              alt="Hero's image"
              height={700}
              width={700}
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
