import React from "react";
import Layout from "./../components/Layout/Layout.js";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row policy">
        <div className="policy_1">
          <img
            src="/images/contactus.jpeg"
            alt="policy"
            style={{ alignItems:"center", fontSize:"300px" }}
          />
          <span>
            <h3>Privacy Policy and Terms & Conditions for M3L Shop</h3>
          </span>
          <h4>Privacy Policy</h4>
          <p>At M3L Shop, we value your privacy and are committed to protecting your personal information. This document outlines how we collect, use, and safeguard your data.</p>
          <p><h6>1. Information Collection : </h6>We collect personal information such as your name, email, contact details, and payment information when you place an order or sign up for our services.</p>
          <p><h6>2. Use of Information :</h6>Your information is used to process orders, communicate updates, and improve our services.</p>
          <p><h6>3. Data Protection :</h6>We implement security measures to protect your data from unauthorized access.</p>
          <p><h6>4. Third-Party Sharing :</h6>We do not sell or share your personal information with third parties, except for trusted partners who assist in delivering our services.</p>
          <p><h6>5. Cookies :</h6> We use cookies to enhance your browsing experience. You can modify your browser settings to disable cookies if preferred.</p> 
          <p><h6>6. User Rights :</h6>You can access, update, or request the deletion of your personal data by contacting us.</p>
          
          <h4>Terms & Conditions</h4>

          <p><h6>1. Acceptance of Terms :</h6> By using M3L Shop, you agree to comply with these terms and conditions.</p>
          <p><h6>2. Product Information :</h6>We strive to provide accurate product details. However, slight variations may occur.</p>
          <p><h6>3. Pricing :</h6>Prices are subject to change without prior notice.</p>
          <p><h6>4. Order Cancellation :</h6>You may cancel your order before it is dispatched. Refunds will be processed as per our refund policy.</p>
          <p><h6>5. Intellectual Property :</h6>All content on M3L Shop, including text, images, and logos, is our property. Unauthorized use is prohibited.</p>
          <p><h6>6. Liability Limitation :</h6>M3L Shop is not liable for any indirect damages arising from the use of our products or services.</p>
          <p><h6>7. Amendments :</h6>We reserve the right to modify these terms and conditions at any time. Changes will be posted on our website.</p>

          <h3>Contact Us</h3>
          <p>If you have any questions or concerns about our Privacy Policy or Terms & Conditions, please contact us at <Link>support@m3lshop.com.</Link></p>
          <h5>Thank you for choosing<b> M3L Shop!</b></h5>

        </div>
      </div>
    </Layout>
  );
};

export default Policy;
