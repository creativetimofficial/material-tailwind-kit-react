import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background bg-cover bg-center absolute top-0 w-full h-full bg-[url('/img/background-1.jpg')]" />
        <div className="bg-black/75 bg-cover bg-center absolute top-0 w-full h-full" />
      </section>
      <section className="relative py-16 bg-blue-gray-50/50 px-4">
        <div className="container mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl shadow-gray-500/5 rounded-3xl -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <div className="w-40 -mt-20">
                      <Avatar
                        src="/img/team-2.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="w-full h-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                  <Button className="bg-blue-400">Conntect</Button>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        22
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Friends
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        10
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Photos
                      </Typography>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        89
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Comments
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center my-8">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Jenna Stones
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="w-4 h-4 -mt-px text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Los Angeles, California
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="w-4 h-4 -mt-px text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Solution Manager - Creative Tim Officer
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="w-4 h-4 -mt-px text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div>
              </div>

              <div className="mb-10 py-6 border-t border-blue-gray-50 text-center">
                <div className="flex flex-wrap justify-center mt-2">
                  <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                    <Typography className="font-normal text-blue-gray-500 mb-8">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </Typography>
                    <Button variant="text">Show more</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
