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
import { useEffect } from "react";

export default function Home() {
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
          <div className="text-white mb-[96px] p-[16px]">เนื้อหา</div>
          <div
            className="text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300"
            onClick={() => router.push("/about")}
          >
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px]">
                <p>2021 - 2024</p>
              </div>
              <div className="col-span-3">
                <p>Senior Front-end Developer • Innovasive Co., Ltd.</p>
                <p className="text-slate-500">Front-end Developer</p>
                <p className="text-slate-400 mt-[8px]">
                  เนื้อหาของงานที่ innovasive ค่อยมาเขียนเป็นภาษาอังกฤษ
                  ทำเสร็จค่อยทำ language file, Agile-Methodology
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

          <div className="text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px]">
                <p>JUN - OCT 2020</p>
              </div>
              <div className="col-span-3">
                <p>Programmer • G - Able</p>
                <p className="text-slate-400 mt-[8px]">
                  Developed and collaborated with backend and designer
                  พัฒนาระบบยื่นคำขออนุญาตจัดการอาคารออนไลน์ โดยทำงานร่วมกับ
                  backend, designer และ project manager เป็น
                  ที่เกี่ยวกับการกรอกข้อมูลเพื่อเก็บ data ไว้
                </p>
                <p className="text-slate-4vvvvvvv00">
                  เนื้อหาข้างใน ระบบยื่นคำขออนุญาตจัดการอาคารออนไลน์
                  เป็นระบบที่ทำขึ้นมาเพื่ออำนวยความสะดวกให้กับประชาชน
                  ที่ไม่ต้องเดินทางมาที่กรมโยธาเพื่อยื่นแบบคำขอ
                  สามารถยื่นคำขอทางออนไลน์ได้เอง และควบคุมเอกสาร
                  เผื่อมีเหตุการณ์ไม่คาดฝัน เช่น ตึกถล่ม ไฟไหม้
                  ทำให้เกิดระบบนี้ขึ้นมา
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

          <div className="mt-[96px] text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <img
                  src="/image_default.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                />
              </div>
              <div className="col-span-3">
                <p>E-document Management System</p>
                <p className="text-slate-400 mt-[8px]">
                  พัฒนาเกี่ยวกับเอกสารต่างๆ ที่เป็นเอกสาร pdf โดยมีความยากในการ
                  ทำเกี่ยวกับระเบียบสารบรรณ ทำให้ manageยาก และต้องมีการคุยกับ
                  backend มาก และมีการใช้ longdoMap เข้ามาใช้ด้วย
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[24px] text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <img
                  src="/image_default.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                />
              </div>
              <div className="col-span-3">
                <p>Government data linkage Management system</p>
                <p className="text-slate-400 mt-[8px]">
                  Web app for Visualization of personalized data ระบบ
                  มีไว้เชื่อมต่อกับหน่วยงานของภาครัฐ เอาไว้ดูข้อมูลต่างๆ
                  เพื่อเอามาแสดงผลออกมาให้ถูกต้อง
                  มีความยากในการจัดการข้อมูลที่เยอะ และต้องจัดการ performance
                  ให้ดี
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
                  <img
                    src="/saansook.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                </div>
                <div className="col-span-3">
                  <p>Saansook Management system</p>
                  <p className="text-slate-400 mt-[8px]">
                    เป็น website
                    ที่ไว้ติดตามพฤติกรรมในชีวิตประจำวันเพื่อเช็คข้อมูล
                    และปรับเปลี่ยนพฤติกรรมให้ดียิ่งขึ้น
                  </p>
                </div>
              </div>
            </div>
          </button>

          <div className="mt-[24px] text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <img
                  src="/image_default.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                />
              </div>
              <div className="col-span-3">
                <p>
                  Submit a request for building management permission system
                </p>
                <p className="text-slate-400 mt-[8px]">
                  เป็น เว็บไซต์ที่ไว้อนุญาตแบบฟอร์มต่างๆ document management
                  เพื่อยื่นคำขออนุญาตจัดการอาคารออนไลน์
                </p>
              </div>
            </div>
          </div>

          <div className="text-white rounded-[6px] p-[16px] hover:drop-shadow-lg cursor-pointer hover:bg-slate-800 hover:shadow-md w-full hover:text-teal-300 mt-[96px]">
            <div className="grid grid-cols-4 gap-x-[16px]">
              <div className="col-span-1 text-slate-500 text-sm mt-[2px] w-[130px] h-[90px]">
                <Zoom>
                  <img
                    src="/iot.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                </Zoom>
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
                <img
                  src="/image_default.png"
                  alt=""
                  className="w-full h-full object-cover rounded-[6px]"
                />
              </div>
              <div className="col-span-3 flex  flex-col">
                <p className="text-slate-400">2017</p>
                <p>รางวัลชมเชย การแข่งขันพัฒนาโปรแกรมด้วยภาษาจาวา</p>
                <p>ประเภททีม พัฒนาโปรแกรม</p>
              </div>
            </div>
          </div>

          {/* <div
            className="text-white cursor-pointer hover:text-teal-300"
            onClick={() => router.push("/about")}
          >
            click to about
          </div> */}
        </div>
      </div>
    </div>
  );
}
