"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import _ from "lodash";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // titleTab();
  }, []);

  const titleTab = () => {
    let docTitle = document.title;
    window.addEventListener("blur", () => {
      document.title = "Come back";
    });
    window.addEventListener("focus", () => {
      document.title = docTitle;
    });
  };

  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-[1280px] flex flex-row px-[24px] h-screen">
        <div className="w-[50%] flex flex-col py-[96px]">
          <div className="text-[#E2E8F0] space-y-[8px]">
            <p className="text-5xl">Seksak Jewudomchai</p>
            <p className="text-2xl">Frontend Developer</p>
          </div>
          <div className="mt-auto text-[#E2E8F0] space-x-[16px]">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              className="hover:text-teal-300 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/seksak-J", "_blank")
              }
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="hover:text-teal-300 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/seksak-jewudomchai/",
                  "_blank"
                )
              }
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className="hover:text-teal-300 cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/ssseksakj/", "_blank")
              }
            />
            <FontAwesomeIcon
              icon={faLine}
              size="xl"
              className="hover:text-teal-300 cursor-pointer"
              onClick={() =>
                window.open("https://line.me/ti/p/xxiVYTUd55", "_blank")
              }
            />
          </div>
        </div>
        <div className="w-[50%] overflow-y-scroll py-[96px] hide-scrollbar">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.open("https://innovasive.co.th/", "_blank")}
          >
            <div className="text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300 overflow-hidden  hover:border hover:border-white">
              <div className="grid grid-cols-4 gap-x-[16px]">
                <div className="col-span-1 text-slate-500 text-sm mt-[2px] text-start">
                  <p>MAY 2021 - 2024</p>
                </div>
                <div className="col-span-3 text-start">
                  <p>Senior Front-end Developer • Innovasive Co., Ltd.</p>
                  <p className="text-slate-500">Front-end Developer</p>
                  <p
                    className={` text-slate-400 mt-[8px] ${
                      isHovered ? "hidden" : "visible"
                    }`}
                  >
                    Develop a website with Next.js, React.js, and Tailwind CSS.
                    Use a Pixel-perfect technique to achieve results that match
                    the design as closely as possible. Have an owner estimate
                    the time before starting the work. Use a Cypress for
                    conducting tests to ensure the functionality and performance
                    of web applications. Ensure collaboration between the
                    backend team, designers, testers, and the product team.
                  </p>
                  <p
                    className={` text-slate-400 mt-[8px] ${
                      isHovered ? "visible" : "hidden"
                    }`}
                  >
                    The projects I have worked on with Innovasive include
                    HealthTech, Visualization of personalized data and E-office
                    or document management. Working together using Agile
                    methodology involves dividing the work into sprints and
                    conducting research together every first friday of the
                    sprint to learn new things. Estimate time together at the
                    beginning of each sprint to set daily goals for when tasks
                    should be completed, aiming to increase efficiency in our
                    work. Working using Next.js, React.js, TypeScript and using
                    TailwindCss to beautifully style the web pages. Cypress is
                    used as a testing framework for conducting End-to-End
                    Testing. Utilize Pixel-Perfect principles to ensure the web
                    pages are as accurate as possible to the designer&apos;s
                    specifications. In the data visualization and document
                    management project, we utilized LongdoMap and also Research
                    getSteam into the project for features such as chat and
                    notifications.
                  </p>
                  <div className="flex flex-wrap items-center mt-[8px]">
                    {_.map(
                      [
                        "Next.js",
                        "React",
                        "Typescript",
                        "Javascript",
                        "HTML & CSS",
                        "TailwindCss",
                        "Storybook",
                        "Framer Motion",
                      ],
                      (item, index) => (
                        <div
                          key={index}
                          className="bg-teal-400/10 px-[12px] py-[4px] text-teal-300 rounded-full mt-[8px] mr-[6px] text-xs"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </button>

          <button
            onMouseEnter={() => setIsHover1(true)}
            onMouseLeave={() => setIsHover1(false)}
            onClick={() => window.open("https://www.g-able.com/", "_blank")}
          >
            <div className="text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300 overflow-hidden  hover:border hover:border-white">
              <div className="grid grid-cols-4 gap-x-[16px]">
                <div className="col-span-1 text-slate-500 text-sm mt-[2px] text-start">
                  <p>JUN - OCT 2020</p>
                </div>
                <div className="col-span-3 text-start">
                  <p>Programmer • G - Able</p>
                  <p
                    className={` text-slate-400 mt-[8px] ${
                      isHover1 ? "hidden" : "visible"
                    }`}
                  >
                    Developed and collaborated with backend and designer.
                    Developed an online building permit application system
                    working collaboratively with backend, designer and project
                    manager by utilizing data entry to store information.
                  </p>
                  <p
                    className={` text-slate-400 mt-[8px] ${
                      isHover1 ? "visible" : "hidden"
                    }`}
                  >
                    The online building permit application system was developed
                    to provide convenience to the public, allowing them to
                    submit applications online without needing to visit the
                    Department of Public Works. Users can also manage their
                    documents independently, which proves helpful in unforeseen
                    events such as building collapses or fires.
                  </p>
                  <div className="flex flex-wrap items-center mt-[8px]">
                    {_.map(
                      [
                        "Vue",
                        "BootstrapVue",
                        "Javascript",
                        "HTML & CSS",
                        "Postman",
                      ],
                      (item, index) => (
                        <div
                          key={index}
                          className="bg-teal-400/10 px-[12px] py-[4px] text-teal-300 rounded-full mt-[8px] mr-[6px] text-xs"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </button>

          <div className="mt-[96px] text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <Image
                  src="/images/image_default.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                  width={130}
                  height={90}
                />
              </div>
              <div className="col-span-3">
                <p>E-document Management System</p>
                <p className="text-slate-400 mt-[8px]">
                  Developing applications related to various PDF documents, with
                  integration of LongdoMap. The complexity involved in dealing
                  with regulatory compliance makes management difficult,
                  requiring extensive communication with the backend.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[24px] text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <Image
                  src="/images/image_default.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                  width={130}
                  height={90}
                />
              </div>
              <div className="col-span-3">
                <p>Government data linkage Management system</p>
                <p className="text-slate-400 mt-[8px]">
                  A web app for visualization of personalized data, designed to
                  connect with government agencies for accurate data display.
                  There are challenges in managing large volumes of data and
                  ensuring good performance.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full text-start"
            onClick={() => window.open("https://saansook.com/", "_blank")}
          >
            <div className="mt-[24px]  text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md hover:text-teal-300">
              <div className="grid grid-cols-4 gap-x-[16px]">
                <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                  <Image
                    src="/images/saansook.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-[6px]"
                    width={130}
                    height={90}
                  />
                </div>
                <div className="col-span-3">
                  <p>Saansook Management system</p>
                  <p className="text-slate-400 mt-[8px]">
                    A website designed to track daily life behaviors for
                    checking and improving habits.
                  </p>
                </div>
              </div>
            </div>
          </button>

          <div className="mt-[24px] text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <Image
                  src="/images/image_default.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                  width={130}
                  height={90}
                />
              </div>
              <div className="col-span-3">
                <p>
                  Submit a request for building management permission system
                </p>
                <p className="text-slate-400 mt-[8px]">
                  A website for managing various forms and documents for online
                  building permit applications.
                </p>
              </div>
            </div>
          </div>

          <div className="text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300 mt-[96px]">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <Image
                  src="/images/iot.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                  width={130}
                  height={90}
                />
              </div>
              <div className="col-span-3 flex  flex-col">
                <p className="text-slate-400">2019</p>
                <p>IOT Exploration Program</p>
              </div>
            </div>
          </div>

          <div className="text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300 mt-[24px]">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <Image
                  src={"/images/image_default.png"}
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                  width={130}
                  height={90}
                />
              </div>
              <div className="col-span-3 flex  flex-col">
                <p className="text-slate-400">2017</p>
                <p>
                  Honorable mention award in the team category of the Java
                  programming development competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
