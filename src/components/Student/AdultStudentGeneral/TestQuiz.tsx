"use client";
import CourseCard from "@/components/Admin/CourseContainer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useRef } from "react";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";
import Image from "next/image";
import chatgbt from "@/assets/images/courses/chatgpt.svg";
import robot from "@/assets/images/Student/robot.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "@/components/Shared/Header";
import "swiper/css";
import pdf from "@/assets/images/Student/pdf_icon.svg";
import meet from "@/assets/images/Student/meet_icon.svg";

const TestQuiz = () => {
  const [Questions, setQuestions] = useState([
    {
      Qst: "In the client/server Model , the accessing device is a ____",
      name: 'server',
      option1: "client",
      option2: "Server",
      option3: "Service",
      id: 1,
    },

    {
      Qst: "Servers are typically stored in a building called a ____",
      name: 'network',
      option1: "DNS server",
      option2: "DHCP server",
      option3: "Data center",
      id: 2,
    },

    {
      Qst: "The links you click on the web browser are called____",
      name: 'links',
      option1: "Hyper links",
      option2: "Server links",
      option3: "Data links",
      id: 3,
    },

    {
      Qst: "The website adress used to navigate a website is called____",
      name: 'adress',
      option1: "Domaine name",
      option2: "Client name",
      option3: "HTTP",
      id: 4,
    },
  ]);

  const [Answer1, setAnswer1] = useState("");
  const [Answer2, setAnswer2] = useState("");
  const [Answer3, setAnswer3] = useState("");
  const [Answer4, setAnswer4] = useState("");

  return (
    <div className="h-screen pt-8 px-20 flex flex-col space-y-14 font-gilroy">
      <div className="flex flex-row justify-between">
        <Header
          title="Thank You for enrolling this Course, One Step left"
          subtitle="Fill the test to define your starting point"
        />
        <button className="py-4 px-9 rounded-[8px] text-[26px] bg-[#38CFBA] text-white border-2">
          {" "}
          Submit
        </button>
      </div>

      {Questions.map((Q) => (
        <div key={Q.id} className="flex flex-col justify-start space-y-4 ">
          <h1 className="text-2xl font-medium ">
            {" "}
            Q{Q.id}\ {Q.Qst}{" "}
          </h1>
          <div className="flex flex-row items-center justify-left space-x-2">
            <input
              required
              type="radio"
              name={Q.name}
              value={Q.option1}
              id="type1"
              onChange={(e) => setAnswer1(e.target.value)}
            />
            <label htmlFor="type1" className="text-xl">
              {Q.option1}
            </label>
          </div>

          <div className="flex flex-row items-center justify-left space-x-2">
            <input
              required
              type="radio"
              name={Q.name}
              value={Q.option2}
              id="type2"
              onChange={(e) => setAnswer1(e.target.value)}
            />
            <label htmlFor="type2" className="text-xl">
              {Q.option2}
            </label>
          </div>

          <div className="flex flex-row items-center justify-left space-x-2">
            <input
              required
              type="radio"
              name={Q.name}
              value={Q.option3}
              id="type3"
              onChange={(e) => setAnswer1(e.target.value)}
            />
            <label htmlFor="type3" className="text-xl">
              {Q.option3}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TestQuiz;
