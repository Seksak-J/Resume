"use client";
import React, { useEffect, useState } from "react";

const HoverSlideDown = () => {
  const [isHovered, setIsHovered] = useState(0);

  useEffect(() => {
    const divElement: any = document.getElementById("test")?.clientHeight;
    console.log(divElement);
    setIsHovered(divElement + 80);
  }, []);

  return (
    <div className="group">
      <div
        className={`bg-blue-500 text-white p-4 w-full h-20 hover:h-[${isHovered}px] transition-all duration-300 overflow-hidden`}
      >
        don't hover
        <div id="test" className="hidden group-hover:block w-[500px]">
          Developed and collaborated with backend and designer
          พัฒนาระบบยื่นคำขออนุญาตจัดการอาคารออนไลน์ โดยทำงานร่วมกับ backend,
          designer และ project manager เป็น ที่เกี่ยวกับการกรอกข้อมูลเพื่อเก็บ
          data ไว้
        </div>
      </div>
    </div>
  );
};

export default HoverSlideDown;
