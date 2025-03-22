import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard({ img, name, subHead, projectDesc, link, ...props }) {
  return (
    <Card className="mt-6 w-auto lg:h-full lg:w-full lg:max-w-[48rem] md:h-full md:w-full md:max-w-[45rem] lg:flex-row md:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 lg:m-0 lg:w-2.5/5 md:m-0 md:w-2/5  shrink-0 sm:relative "
        {...props}
      >
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover object-center"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {name}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {subHead}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {projectDesc}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default ProjectCard