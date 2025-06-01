import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div className="container mx-auto">
            <h1 className=" text-xl font-extralight my-2">Landing Page</h1>
            <div className="grid grid-cols-1 items-center justify-items-center md:justify-items-start md:grid-cols-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex">
                <Button title="Book Now" styles="btn-sm rounded-sm py-2 px-4 cursor-pointer font-bold bg-green-500" />
                <Button title="Cancel" styles="btn-sm rounded-md py-3  px-4 cursor-pointer font-bold bg-green-500 ml-2" />
                <Button title="Login" styles="btn-sm rounded-lg p-4 cursor-pointer font-bold bg-green-500 ml-2" />
                <Button title="Register" styles="btn-sm rounded- p-4 cursor-pointer font-bold bg-green-500 ml-2" />
            </div>
            <div className="flex mt-3">
                <Button title="Book Now" styles="btn-sm rounded-sm py-2 px-4 cursor-pointer font-bold" />
                <Button title="Cancel" styles="btn-sm rounded-md py-3  px-4 cursor-pointer font-bold ml-2" />
                <Button title="Login" styles="btn-sm rounded-lg py-3  px-4 cursor-pointer font-bold ml-2" />
                <Button title="Register" styles="btn-sm rounded-full p-4 cursor-pointer font-bold ml-2" />
            </div>

        </div>
    );
}

export default Landing;
