import Footer from "@/components/footer/Footer";
import Container from "@/components/ui/Container";
import Image from "next/image";

export const metadata = {
  title: "About us",
  description: "This is the about page",
};

const AboutPage = () => {
  return (
    <>
      <Container classes={"grid grid-cols-1 md:grid-cols-2 my-10"}>
        <div className="flex-1">
          <h2 className="text-xs uppercase font-bold tracking-widest text-amber-500 mb-5 italic">
            About agency
          </h2>
          <h1 className="text-4xl md:text-[3rem] font-bold -tracking-wider md:leading-[1.2]">
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>

          <p className="text-zinc-300 mt-5 md:max-w-md leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            est fugiat accusantium quo totam accusamus nulla repudiandae
            explicabo vel quod molestiae ex doloremque, architecto sequi in vero
            magnam libero similique dolore aliquid inventore ab rem?
          </p>

          <div className="grid grid-cols-3 mt-10">
            <div>
              <h5 className="text-3xl font-bold text-zinc-100 ">10k+</h5>
              <h6 className="text-xs uppercase font-semibold tracking-widest text-zinc-400/50 italic">
                Views
              </h6>
            </div>
            <div>
              <h5 className="text-3xl font-bold text-zinc-100 ">5k+</h5>
              <h6 className="text-xs uppercase font-semibold tracking-widest text-zinc-400/50 italic">
                Comments
              </h6>
            </div>
            <div>
              <h5 className="text-3xl font-bold text-zinc-100 ">8k+</h5>
              <h6 className="text-xs uppercase font-semibold tracking-widest text-zinc-400/50 italic">
                Likes
              </h6>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-0 flex items-center justify-center ">
          <Image
            src="/about.png"
            alt="about page"
            height={250}
            width={500}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
