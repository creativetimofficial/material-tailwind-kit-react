import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import carData from "@/data/car-data";
import CarsCard from "@/widgets/cards/car-cards";

export function Cars() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-1/2 w-full bg-[url('\img\\car-lot-but-better.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-1/2 w-full bg-black/50 bg-cover bg-center" />
        <div className="grid grid-rows-6 mb-40 container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
              >
                Car Inventory
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className=" bg-blue-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {carData.map(({ color, title, price, description }) => (
              <CarsCard
              title={title}
              color = {color}
              price = {price}
              description = {description}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cars;