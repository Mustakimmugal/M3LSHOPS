import React from "react";
import Layout from "./../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row about_us ">
        <div className="col-md-6 abt_ph">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{width:"100%"}}
          />
        </div>
        <div className="col-md-6 abt_ph">
          <h1>About Us</h1>
          <p>Welcome to M3L Shop, your trusted destination for high-quality products and exceptional customer service. We are dedicated to offering you the best shopping experience with a focus on reliability, affordability, and convenience.
             At M3L Shop, we carefully curate a wide range of products to meet your needs, whether you're looking for the latest trends, daily essentials, or unique items to brighten your life. Our mission is to make online shopping simple and enjoyable, ensuring you always find what you’re looking for with just a few clicks.
             We value our customers and strive to build long-term relationships based on trust and satisfaction. If you ever have any questions, concerns, or feedback, our friendly support team is here to assist you.
             Thank you for choosing M3L Shop. We look forward to serving you and being a part of your journey.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
