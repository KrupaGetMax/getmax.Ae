

import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import LandingSectionImage from "../../assets/LandingSection.png";

export default function LandingSection() {
  return (
    <>
      <div className="flex justify-center py-12">
        <h1 className="text-4xl font-semibold text-center text-gray-800">
          Concerned about managing technologies without hiring multiple experts?
          We've got you covered!
        </h1>
      </div>
      <div className="flex justify-center items-center px-4 pb-6">
        <Card className="w-full max-w-[50rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={LandingSectionImage}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="bg-gray-100">
            <Typography variant="h6" className="mb-4  text-orange-500">
              Startups
            </Typography>

            <Typography color="gray" className="mb-8 font-normal">
              Concerned about managing various technologies without the burden
              of hiring multiple experts, we've got you covered. With our
              managed IT services, we become your trusted partner, handling all
              aspects of technology management so you can focus on your core
              business. From strategic planning to implementation and ongoing
              support, we provide comprehensive solutions tailored to your
              needs, ensuring seamless operation and peace of mind
            </Typography>
            <Link href="#" className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] "
                style={{ textTransform: "capitalize" }}
              >
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
            </Link>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
