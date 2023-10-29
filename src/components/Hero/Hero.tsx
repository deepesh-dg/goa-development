import React from "react";
import Image from "next/image";
import PeopleMetting from "@/assets/Images/bsides-display-logo.png";
import Container from "@/components/Container";
import Video from "@/assets/Video.png";
import ButtonBackground from "@/assets/Images/button_frame.png";
import { ArrowIcon } from "@/assets/Icons";
import { Button } from "../Button";

const Hero = () => {
  return (
    <>
      <Container className="relative z-20">
        <div className="md:flex justify-between pt-10 md:pt-20">
          <div className="text-3xl md:text-5xl font-bold max-w-sm text-yellow-200 text-left">
            BSIDES GOA <br />
            <span className="text-white-100">&nbsp;SECURITY</span> CONFERENCE
          </div>
          <div className="flex flex-col gap-y-4 pr-20 mt-6 md:mt-0">
            <p className="max-w-xs text-white-200/80">
              Hurry! Go and grab your passes in early bird discount.
            </p>
            <div>
              <button
                className="inline-flex gap-2 justify-center items-center px-6 py-2 text-sm font-normal rounded-md"
                style={{
                  background:
                    "linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
                }}
              >
                REGISTER{" "}
                <span>
                  <ArrowIcon className="w-4" />
                </span>
              </button>
              {/* <Button variant="colored">REGISTER</Button> */}
            </div>
          </div>
        </div>

        <div className="py-16">
          <Image src={Video} alt="video"></Image>
        </div>

        {/*  */}
        <div className="md:flex justify-between gap-y-4 ">
          <div className="max-w-md w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-4xl font-medium text-white-100">Overview</h2>
            <p className="text-md font-normal text-white-200/80">
              BSides Goa is a community-driven effort that brings cybersecurity
              enthusiasts together. We organize independent BSides-approved
              events in Goa, fostering open discussions, demos, and
              interactions. Our aim is to encourage collaborative learning and
              explore cybersecurity challenges in a friendly, accessible
              environment. Join us at BSides Goa to be part of a growing
              community that shares knowledge and insights, shaping the future
              of cybersecurity.
            </p>
          </div>
          <div className="max-w-md w-full md:w-1/2 mt-6 md:mt-0">
            <Image src={PeopleMetting} alt="besides_goa_image"></Image>
          </div>
        </div>
      </Container>
      <div
        className="w-full mt-16 lg:bg-cover relative z-20"
        style={{ backgroundImage: `url(${ButtonBackground.src})` }}
      >
        <Container className="py-10">
          <div className="md:flex flex-wrap justify-center items-center gap-10">
            <button
              className="px-6 py-2  text-base font-normal rounded-md"
              style={{
                background: "linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
              }}
            >
              ABOUT BSIDES GOA
            </button>
            <button
              className="mt-4 md:mt-0 px-6 py-2 border-2 rounded-md border-yellow-200 text-white-100 font-normal"
              // style={{
              //   background:
              //     "linear-gradient(0deg, #1E2229, #1E2229),linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%)",
              // }}
            >
              SHOWCASE YOUR BRAND
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
