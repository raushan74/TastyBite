import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Heading, RatingBar, Text } from "../../components";
import Footer from "../../components/Footer";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Header from "../../components/Header";

export default function MenuPage() {
  return (
    <>
      <Helmet>
        <title>TastyBite</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[139px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[92px] md:px-5 max-w-[1112px]">
         <Header></Header>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[70px]">
              <Heading size="2xl" as="h1" className="!font-opensans text-center">
                Our Popular Menu
              </Heading>
              <Tabs
                className="flex flex-col items-center justify-start w-full gap-[50px]"
                selectedTabClassName="!text-white-A700 bg-red-400 rounded-[16px]"
                selectedTabPanelClassName="relative tab-panel--selected"
              >
                {/* <TabList className="flex flex-row justify-between w-full gap-[146px] p-[19px] md:gap-10">
                  <Tab className="mt-1 ml-[35px] sm:ml-5 text-white-A700 text-xl font-semibold">All catagory</Tab>
                  <Tab className="text-gray-900 text-xl font-normal">Dinner</Tab>
                  <Tab className="text-gray-900 text-xl font-normal">Lunch</Tab>
                  <Tab className="text-gray-900 text-xl font-normal">Dessert</Tab>
                  <Tab className="mr-[51px] md:mr-5 text-gray-900 text-xl font-normal">Drink</Tab>
                </TabList> */}
                <div className="flex flex-col items-center justify-start w-full gap-12">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full gap-10">
                      {[...Array(5)].map((_, index) => (
                        <TabPanel key={`tab-panel`} className="justify-center w-full absolute">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row md:flex-col justify-start w-full gap-[35px] md:gap-5">
                              <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[34px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngitem_41084.png"
                                  alt="pngitem41084"
                                  className="w-[270px] md:h-auto mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                                    <Heading size="xl" as="h2" className="text-center">
                                      Spaghetti
                                    </Heading>
                                    <Text size="s" as="p" className="!text-gray-800_02 text-center">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                                    <Heading as="h3">$12.05</Heading>
                                    <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                      Add to Cart
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngitem_1447549.png"
                                  alt="pngitem1447549"
                                  className="w-[270px] md:h-auto mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                                    <Heading size="xl" as="h4" className="text-center">
                                      Gnocchi
                                    </Heading>
                                    <Text size="s" as="p" className="!text-gray-800_02 text-center">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                                    <Heading as="h5">$12.05</Heading>
                                    <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                      Order now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngegg.png"
                                  alt="pngegg_one"
                                  className="w-[270px] md:h-auto mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                                    <Heading size="xl" as="h6" className="text-center">
                                      Rovioli
                                    </Heading>
                                    <Text size="s" as="p" className="!text-gray-800_02 text-center">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                                    <Heading as="h4">$12.05</Heading>
                                    <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                      Order now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      ))}
                      <div className="flex flex-row md:flex-col w-full gap-[35px]">
                        <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[31px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngwing.png"
                            alt="penne_alla"
                            className="w-[95%] md:h-auto sm:w-full mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-3.5">
                              <Heading size="xl" as="h3" className="text-center">
                                Penne Alla Vodak
                              </Heading>
                              <Text size="s" as="p" className="!text-gray-800_02 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                              <Heading as="h4">$12.05</Heading>
                              <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngitem_5290903.png"
                            alt="pngitem5290903"
                            className="w-[270px] md:h-auto mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                              <Heading size="xl" as="h3" className="text-center">
                                Risoto
                              </Heading>
                              <Text size="s" as="p" className="!text-gray-800_02 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                              <Heading as="h4">$12.05</Heading>
                              <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[34px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngwing_270x270.png"
                            alt="pngwing_one"
                            className="w-[270px] md:h-auto mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                              <Heading size="xl" as="h3" className="text-center">
                                Splitza Signature
                              </Heading>
                              <Text size="s" as="p" className="!text-gray-800_02 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                              <Heading as="h4">$12.05</Heading>
                              <Button size="xl" className="sm:px-5 font-semibold min-w-[158px] rounded-lg">
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
