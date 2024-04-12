import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default function AboutusPage() {
  return (
    <>
      <Helmet>
        <title>TastyBite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[105px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[78px] md:px-5 max-w-[1112px]">
          <Header ></Header>
          <div className="flex flex-col items-center justify-start w-full gap-[120px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <div className="flex flex-col items-center justify-start h-[543px] w-[543px] sm:h-auto">
                <div className="flex flex-col items-center justify-start h-[543px] w-[543px] sm:w-full sm:h-auto p-[52px] md:p-5 bg-blue_gray-100_01 rounded-[271px]">
                  <div className="flex flex-col items-center justify-start h-[437px] w-[437px] sm:w-full sm:h-auto p-[45px] md:p-5 bg-blue_gray-100_01 rounded-[218px]">
                    <Img
                      src="images/img_unsplash_ebmyh7oo5wy.png"
                      alt="unsplash_one"
                      className="h-[346px] w-[346px] md:h-auto rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[39%] md:w-full gap-[35px]">
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Heading size="2xl" as="h1" className="flex w-[68%] !text-red-400 !font-tinos !leading-[110%]">
                    <span className="text-gray-900_02 font-opensans">
                      <>
                        About Our <br />
                      </>
                      <span className="text-red-400 font-opensans">Restaurant</span>
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
            <div className="flex flex-row md:flex-col justify-between items-center w-full gap-[105px] md:gap-10">
              <Text size="lg" as="p" className="w-[41%] !text-gray-800_01">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </Text>
              <div className="flex flex-col items-center justify-start h-[560px] w-[560px] sm:h-auto">
                <div className="flex flex-col items-center justify-start h-[560px] w-[560px] sm:w-full sm:h-auto px-14 py-[57px] md:p-5 bg-blue_gray-100_01 rounded-[50%]">
                  <div className="flex flex-col items-center justify-start h-[445px] w-[445px] sm:w-full sm:h-auto p-[45px] md:p-5 bg-blue_gray-100_01 rounded-[222px]">
                    <Img
                      src="images/img_unsplash_5dszncvdhd0.png"
                      alt="unsplash_three"
                      className="h-[354px] w-[354px] md:h-auto rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <Img
                src="images/img_unsplash_lrawct7uwhy.png"
                alt="unsplash_five"
                className="w-[42%] md:w-full md:h-[629px] object-cover"
              />
              <div className="flex flex-col items-start justify-start w-[50%] md:w-full gap-[70px]">
                <div className="flex flex-col items-start justify-start w-full gap-1.5">
                  <Heading size="2xl" as="h2" className="flex !font-tinos !leading-[140%]">
                    
                    <span className="text-red-400 font-opensans">Owner</span>
                    
                  </Heading>
                  <Text size="3xl" as="p" className="!text-gray-800_01">
                    Ismail Marzuki
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[91%] md:w-full">
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="h-[309px] w-full relative">
                      <Text
                        size="2xl"
                        as="p"
                        className="bottom-0 right-0 left-0 m-auto !text-gray-800_01 italic absolute"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </Text>
                      <Heading
                        size="4xl"
                        as="h3"
                        className="left-0 top-0 m-auto !text-amber-800_6c !font-tinos opacity-0.2 absolute"
                      >
                        “
                      </Heading>
                    </div>
                    <Heading size="4xl" as="h4" className="!text-amber-800_6c !font-tinos opacity-0.2 rotate-[180deg]">
                      “
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
