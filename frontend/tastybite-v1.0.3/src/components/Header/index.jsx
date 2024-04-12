import React from "react";
import { Text, Button, Img } from "components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
     <Img src="images/logo.png" alt="logo" className="h-[50px]" />
      <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-full sm:gap-10">
        <Text as="p" className="mt-px sm:mt-0">
          <NavLink to="/">Home</NavLink>
        </Text>

        <Text as="p" className="mt-px sm:mt-0">
          <NavLink to="/menu">Menu</NavLink>
        </Text>

        <Text as="p">
          <NavLink to="/aboutus">About Us</NavLink>
        </Text>

        


        <Text as="p">
          <NavLink to="/contact">Contact Us</NavLink>
        </Text>

      </div>
      <div className="flex flex-row justify-start gap-[25px]">
       <Link to="/cart">
        <Button
          color="white_A700"
          size="lg"
          shape="circle"
          className="w-[50px]"
        >
          <Img src="images/img_group_103.svg" />
        </Button>
        </Link>
        <Link to="/login">
          <Button size="md" shape="round" className="sm:px-5 font-semibold min-w-[112px]">
            Log in
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="md" shape="round" className="sm:px-5 font-semibold min-w-[112px]">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
}
