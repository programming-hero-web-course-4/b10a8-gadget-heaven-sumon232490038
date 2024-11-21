import React from "react";
import { Helmet } from "react-helmet-async";
import Favicon from "react-favicon";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <Favicon url="https://i.ibb.co.com/Y7YtLm5/contact-information.png" />
      <div className="bg-[#9538e2] pt-10 pb-10 text-white text-center space-y-4">
        <h1 className="font-bold text-3xl mb-5">Contact us</h1>
        <p className="">
          If you have any suggestions or feedback or want to contact us, please
          contact us with your <br /> personal information in the form below.
          Thank you
        </p>
      </div>

      <div className="max-w-4xl flex flex-col gap-3 md:flex-row items-center  my-10 mx-auto p-5">
        <div className=" flex-1">
          <h1 className="text-center text-xl">ONLINE INQUIRY</h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded-xl p-3 w-full"
            />
            <input
              type="email"
              placeholder="email"
              className="border rounded-xl p-3 w-full"
            />
            <input
              type="number"
              placeholder="Phone"
              className="border rounded-xl p-3 w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-md w-full "
            ></textarea>
          </div>
        </div>
        <div className="flex-1 text-center space-y-4 mb-10">
          <h1 className="text-center  text-xl ">CONTACT DETAILS</h1>
          <div className="border-b">
            <h1>gadgetheaven24@gamil.com</h1>
            <p>(656)-564-455</p>
          </div>
          <div className="border-b">
            <h1 className="border-b font-bold">Dhaka</h1>
            <p>solmaid, dhalibari,vatara</p>
            <p>gulshan,dhaka-1212</p>
          </div>
          <div>
            <h1 className="font-bold">Canada</h1>
            <p>1425 10th Avenue po box 4001</p>
            <p>victoria BC V8X canada</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
