import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import emailjs from "@emailjs/browser";

export function Home() {
  const form = React.useRef();
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    var params = {
      service_id: "service_anwwz9h",
      template_id: "template_znpvy2t",
    };

    var cont = {
      public_Key: "vVw_ZNRtba3Y2eBzK",
      name: name,
      email: email,
      message: message,
    };

    try {
      emailjs
        .sendForm(
          params.service_id,
          params.template_id,
          form.current,
          cont.public_Key
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Your message has been sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 w-screen overflow-hidden">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-4.jpeg')] bg-no-repeat bg-black bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your story starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We provide your business, be it a small and midsize business
                with a faster, Go-To-Market-strategy for improved efficiency and
                productivity leveraging digital technology
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                At SasekLabs, we believe technology should make your work
                easier, not harder. Our solutions are designed to enhance
                productivity and efficiency, helping you achieve more with less
                effort. Whether you're streamlining operations, automating
                tasks, or improving collaboration, we deliver seamless,
                user-friendly tools that fit right into your workflow.
                <br />
                <br />
                We don’t just provide tech—we create experiences that make work
                smoother, smarter, and more enjoyable. Partner with us and
                transform the way you work.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-2xl">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/cardimg.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    SasekLabs
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Efficiency meets innovation with our cutting-edge technology
                    solutions. We empower businesses with seamless automation,
                    enhanced collaboration, and data-driven insights—helping you
                    stay ahead in a fast-evolving digital world.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div id="our" className="container mx-auto">
          <PageTitle
            section="Our Services"
            heading="Here is the value we bring to your business"
          >
            At SasekLabs, we help small and medium-sized businesses thrive in
            the digital age. Our innovative tech solutions are designed to
            streamline operations, enhance customer experiences, and drive
            growth.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                // socials={
                //   <div className="flex items-center gap-2">
                //     {socials.map(({ color, name }) => (
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-xl fa-${name}`} />
                //       </IconButton>
                //     ))}
                //   </div>
                // }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Our Core Values" heading="What we stand for">
            These are the values we stand for as a team. They represent what
            drives us as a team and how we approach every project and client
            relationship. Passion, Quest for Quality, Innovation,forged from
            Collaboration is what drives us as a team.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 justify-center ">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form
            className="mx-auto w-full mt-12 lg:w-5/12"
            onSubmit={handleSubmit}
            ref={form}
          >
            <div className="mb-8  gap-8 sm:flex-wrap sm:grid sm:grid-cols-1">
              <div className="w-full mb-6 lg:mb-0 md:mb-0 sm:mb-8">
                <Input
                  variant="outlined"
                  size="lg"
                  label="Full Name"
                  type="text"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Input
                  variant="outlined"
                  size="lg"
                  label="Email Address"
                  required
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Message"
              name="message"
              rows={8}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              required
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              variant="gradient"
              size="lg"
              className="mt-8"
              fullWidth
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
