import { Fragment } from "react";
import { Typography, Card } from "@material-tailwind/react";

export function AboutUs() {
  return (
    <Fragment>
      <header className="relative flex h-[50vh] content-center items-center justify-center pt-16 pb-32">
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/pattern.png')",
          }}
        />
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-5xl"
              >
                About Us
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="text-lg font-normal"
              >
                Details about the committee!
              </Typography>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-3/5">
              <Card className="shadow-lg p-6">
                <Typography
                  variant="h2"
                  className="font-bold text-center mb-6"
                >
                  Coming Soon
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-lg text-justify font-normal"
                >
                  Details about the committee!
                </Typography>
              </Card>
            </div>
            <div className="hidden lg:block lg:w-2/5 px-4">
              <img
                src="/img/pattern.png"
                alt="AboutUs Pattern"
                className="h-full w-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default AboutUs;