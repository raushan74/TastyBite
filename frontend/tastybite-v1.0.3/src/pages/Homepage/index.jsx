import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, RatingBar } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Link } from "react-router-dom";
export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>TastyBite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[129px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[70px] p-[50px] md:p-5 bg-gradient">
            <Header></Header>
            <div className="flex flex-row md:flex-col justify-between items-center w-full mb-5 md:gap-10 max-w-[1240px]">
              <div className="flex flex-row justify-center w-[47%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading size="3xl" as="h1" className="flex !text-gray-900_02 !font-opensans">
                    <span className="text-gray-900_02">
                      <>
                        Best Restaurant
                        In {""}
                      </>
                      <span className="text-red-400">Town.</span>
                    </span>
                    
                  </Heading>
                  <Text size="lg" as="p" className="w-[91%] mt-[15px] !text-gray-800">
                    We provide best food in town, we provide home delivery and dine in services.
                  </Text>
                  <div className="flex flex-row sm:flex-col justify-start mt-9 gap-6 sm:gap-5">
                    <Link to="/orderonline">
                    <Button size="5xl" shape="round" className="sm:px-5 font-semibold min-w-[232px]" >
                  
                      Order now
                    </Button>
                    </Link>
                    {/* <Button color="red_400_19" size="5xl" shape="round" className="sm:px-5 font-semibold min-w-[232px]">
                      Reservation
                    </Button> */}
                  </div>
                </div>
              </div>
              <Img
                src="images/img_illustration.png"
                alt="illustration"
                className="w-[48%] md:w-full md:h-[502px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-center items-start w-full gap-[13px] p-3.5 bg-green-50">
            <div className="h-[646px] w-[48%] md:w-full ml-[149px] md:ml-5 relative">
              <div className="flex flex-col items-end justify-start w-[89%] bottom-0 left-0 m-auto absolute">
                <div className="flex flex-row sm:flex-col justify-end items-center w-full sm:gap-5">
                  <Img
                    src="images/img_kisspng_leaf_pe.png"
                    alt="kisspngleafpe"
                    className="w-[32%] md:h-auto sm:w-full z-[1] object-cover"
                  />
                  <Img
                    src="images/img_kindpng_3443995.png"
                    alt="kindpng3443995"
                    className="w-[96%] md:h-auto sm:w-full ml-[-160px] sm:ml-0 object-cover"
                  />
                </div>
                <Img
                  src="images/img_kisspng_leaf_pe_117x110.png"
                  alt="kisspngleafpe"
                  className="w-[19%] md:h-auto sm:w-full mt-[-74px] mr-[217px] md:mr-5 object-cover"
                />
              </div>
              <Img
                src="images/img_kisspng_leaf_pe_158x154.png"
                alt="kisspngleafpe"
                className="h-[158px] w-[24%] sm:w-full right-0 top-0 m-auto object-cover absolute"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[31%] md:w-full mt-[91px] mr-[149px] gap-[35px] md:mt-0 md:mr-5">
              <div className="flex flex-col items-start justify-start w-full gap-4">
                <Heading size="2xl" as="h2" className="flex w-[80%] !text-red-400 !font-tinos !leading-[110%]">
                  <span className="text-gray-900_02 font-opensans">
                    <>
                      Our Most <br />
                      Popular{" "}
                    </>
                    <span className="text-red-400 font-opensans">Dish.</span>
                  </span>
                  
                </Heading>
                <Text size="lg" as="p" className="!text-gray-800_01">
                  This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential
                  amino acids your body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button size="5xl" shape="round" className="sm:px-5 font-semibold min-w-[232px] sm:min-w-full">
                Order now
              </Button>
            </div>
          </div>
        </div>
       
        <div className="flex flex-row justify-center w-full md:px-5 max-w-[1112px]">
          <div className="flex flex-col items-center justify-start w-full">
            <Heading size="2xl" as="h2" className="!font-opensans text-center">
              Our Popular Chef
            </Heading>
            <div className="flex flex-row md:flex-col w-full mt-[53px] gap-10">
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full bg-gray-900_04 rounded-[50px]">
                    <Img
                      src="images/img_image_1.png"
                      alt="imageone_one"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                    />
                  </div>
                </div>
                <Heading as="h3">Betran Komar</Heading>
                <Text size="xl" as="p" className="!text-gray-500_01 !font-normal">
                  Head chef
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full pt-2 bg-gradient1 rounded-[50px]">
                      <Img
                        src="images/img_image_3.png"
                        alt="imagethree_one"
                        className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <Heading as="h4">Ferry Sauwi</Heading>
                <Text size="xl" as="p" className="!text-gray-500_01 !font-normal">
                  Chef
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full bg-lime-900 rounded-[50px]">
                    <Img
                      src="images/img_image_2.png"
                      alt="imagetwo_one"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                    />
                  </div>
                </div>
                <Heading as="h5">Iswan Dracho</Heading>
                <Text size="xl" as="p" className="!text-gray-500_01 !font-normal">
                  Chef
                </Text>
              </div>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-[43px]">
          <div className="flex flex-row justify-center w-full md:px-5 max-w-[648px]">
            <Heading size="2xl" as="h2" className="!font-opensans text-center">
              What Our Customers Say
            </Heading>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
              <div className="flex flex-col items-center justify-start h-[60px] w-[60px] z-[1]">
                <Button color="white_A700" shape="circle" className="w-[60px] shadow-lg">
                  <Img src="images/img_group_30.svg" />
                </Button>
              </div>
              <div className="flex flex-row md:flex-col justify-center items-center w-[97%] md:w-full ml-[-30px] md:gap-5 md:ml-0">
                <div className="flex flex-row justify-center w-[97%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[50px] md:p-5 bg-white-A700 rounded-[16px]">
                    <div className="flex flex-row justify-center w-[97%] md:w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[198px] w-full relative">
                          <Img
                            src="images/img_group_7730.svg"
                            alt="image"
                            className="justify-center h-[198px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Text
                            size="lg"
                            as="p"
                            className="w-[87%] bottom-[16%] right-0 left-0 m-auto !text-gray-800_01 text-center absolute"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend
                            proin. Congue nibh nulla malesuada ultricies nec quam{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[43%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_28.png"
                        alt="circleimage"
                        className="h-[80px] w-[80px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-center justify-start w-[67%] gap-2">
                        <Heading size="md" as="h2" className="text-center">
                          Starla Virgoun
                        </Heading>
                        <Text as="p" className="!text-gray-800_01 text-center">
                          Financial advisor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[60px] w-[60px] ml-[-30px] md:ml-0">
                  <Button color="white_A700" shape="circle" className="w-[60px] shadow-xl">
                    <Img src="images/img_group_32.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-14 py-[93px] md:p-5 bg-red-100 max-w-[1112px] rounded-[24px]">
          <div className="flex flex-col items-center justify-start w-[71%] mt-[7px] gap-10 mx-[109px] md:mx-5">
            <Heading size="2xl" as="h2" className="!font-opensans text-center">
              Hungry? We are open now..
            </Heading>
            <div className="flex flex-row sm:flex-col justify-start w-[30%] md:w-full gap-6 sm:gap-5">
              <Button size="5xl" shape="round" className="sm:px-5 font-semibold min-w-[232px] ">
                Order now
              </Button>
              {/* <Button color="white_A700_7f" size="5xl" shape="round" className="sm:px-5 font-semibold min-w-[232px]">
                Reservation
              </Button> */}
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
