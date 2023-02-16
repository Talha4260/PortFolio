import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "It is to certify that Mr. Muhammad Talha Mujahid has successfully completed an internship in the  field of Java from 01/03/2022 to 15/04/2022 under guidance of Senior Java Developer Mr.  Suleman Amjad. During the period of his internship program with us, he had been exposed to different processes  and was found diligent, hardworking, and inquisitive. We wish him success in the future",
    },
    {
      img: profilePic2,
      review:
        "It is certified that Mr. Muhammad Talha Mujahid s/o Mujahid Ali holding No. 61101-1595873-5 has successfully completed his internship at CNIC National Information Technology Board (NITB), Ministry of Information Technology & Telecom, Islamabad from 1st July, 2022 to 30th September, 2022. Mr. Talha worked closely with the development team and gained hands-on experience in designing and developing android based applications. He successfully completed routine tasks assigned to him. During his stay, we found him a devoted and hardworking individual. We wish him every success in his future life.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
