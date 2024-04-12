import React from "react";
import { Text, Heading, Button, Img } from "./..";
import { NavLink } from "react-router-dom"
export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full px-14 py-[70px] md:p-5 bg-orange-100">
        <div className="flex flex-col items-center justify-center w-full mb-0.5 gap-[61px] mx-[93px] md:mx-5 max-w-[1113px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-row justify-center w-[32%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full gap-[42px]">
                {/* <Img src="images/img_logo_red_400.svg" alt="logo_three" className="h-[51px]" /> */}
                <Img src="images/logo.png" alt="logo" className="h-[150px]" />
                <Text size="lg" as="p" className="text-black-900">
                  Where Every Bite is Delight !!{" "}
                </Text>
                <div className="flex flex-row justify-between w-[69%] md:w-full ml-[3px] md:ml-0">
                  <Button color="gray_300" shape="circle" className="w-[60px]">
                    <Img src="images/img_group_53.png" />
                  </Button>
                  <Button color="blue_gray_100_02" shape="circle" className="w-[60px]">
                    <Img src="images/img_instagram.png" />
                  </Button>
                  <Button color="blue_gray_100_02" shape="circle" className="w-[60px]">
                    <Img src="images/img_group_51.png" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[12%] md:w-full mt-[9px] gap-[31px] md:mt-0">
              <Heading as="h4" className="!text-red-400">
                Page
              </Heading>
              
              <div className="flex flex-col items-start justify-start w-full gap-[23px]">
              
              <Text as="p" className="mt-px sm:mt-0">
          <NavLink to="/">Home</NavLink>

        </Text>
        <Text as="p" className="mt-px sm:mt-0">
          <NavLink to="/menu">Menu</NavLink>
        </Text>
                
        <Text as="p">
          <NavLink to="/orderonline"> Order Online</NavLink>
        </Text>

                
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full mt-[5px] gap-[35px] md:mt-0">
              <Heading as="h4" className="!text-red-400">
                Information
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
              <Text as="p">
          <NavLink to="/aboutus">About Us</NavLink>
        </Text>
                <Text size="lg" as="p" className="!text-gray-300_01">
                  Testimonial
                </Text>
                <Text size="lg" as="p" className="!text-gray-300_01">
                  Event
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[26%] md:w-full mt-[5px] gap-[31px] md:mt-0">
              <Heading as="h4" className="!text-red-400">
                Get in touch
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                <Text size="lg" as="p" className=" !leading-[153%] text-black-900">
                  Sector 37C Gurugram{" "}
                </Text>
                <Text size="lg" as="p" className="text-black-900">
                  tastybite@delicious.com
                </Text>
                <Text size="lg" as="p" className="text-black-900">
                 +91 56875495875
                </Text>
              </div>
            </div>
          </div>
          <Text size="lg" as="p" className="flex ">
            <span className="text-black-900">Copyright </span>
            <span className="text-black-900">©</span>
            <span className="text-black-900">2022</span>
          </Text>
        </div>
      </div>
    </footer>
  );
}
