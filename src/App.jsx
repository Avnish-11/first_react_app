import React from "react";


const App = () => {
  return (
    <>
      <div className="h-[773px] w-full flex flex-col p-5 lg:hidden">
        <div className="flex justify-center items-center  text-center flex-col">
          <div className="bg-[#F0F7FF] rounded-full text-[#2589FB] text-[14px] leading-[26px] flex justify-center items-center w-[113px] h-[34px]">Certification</div>
          <div className=" text-[32px] font-bold leading-[40px]">Achieved Certificates</div>
        </div>
        <div className="flex flex-col gap-5 mt-10 ">
          <div className="flex gap-5">
            <div className=" text-[16px] font-medium leading-[20px] flex justify-center text-center flex-col">
              <img src="src/5.png" alt="" className="mb-2" />
              HACCP
            </div>
            <div className="text-[16px] font-medium leading-[20px] flex justify-center text-center flex-col">
              <img src="src/5 (3).png" alt="" />
              GPM
            </div>
          </div>
          <div className="flex gap-5">
            <div className="text-[16px] font-medium leading-[20px] flex justify-center text-center flex-col">
              <img src="src/5 (2).png" alt="" />
              FSSC 22000
            </div>
            <div className="text-[16px] font-medium leading-[20px] flex justify-center text-center flex-col">
              <img src="src/5 (1).png" alt="" />
              ISO 22000
            </div>
          </div>
        </div>
      </div>

      <div className="h-[773px] w-full sm:flex flex-col p-5 hidden">
        <div className="flex justify-center items-center  text-center flex-col">
          <div className="bg-[#F0F7FF] rounded-full text-[#2589FB] text-[14px] leading-[26px] flex justify-center items-center w-[113px] h-[34px]">Certification</div>
          <div className=" text-[32px] font-bold leading-[40px]">Achieved Certificates</div>
        </div>
        <div className="flex justify-evenly gap-5 mt-10 ">
          
            <div className=" text-[20px]  font-medium leading-[20px] flex justify-center text-center flex-col">
              <img src="src/5.png" alt="" className="mb-2 h-[415px]" />
              HACCP
            </div>
            <div className="text-[20px] font-medium leading-[20px] flex justify-center text-center flex-col">
              <img src="src/5 (3).png" alt="" className="mb-2 h-[415px]" />
              GPM
            </div>
            <div className="text-[20px] font-medium leading-[20px] flex justify-center text-center flex-col">
              <img src="src/5 (2).png" alt="" className="mb-2 h-[415px]"/>
              FSSC 22000
            </div>
            <div className="text-[20px] font-medium leading-[20px] flex justify-center text-center flex-col">
              <img src="src/5 (1).png" alt=""className="mb-2 h-[415px]" />
              ISO 22000
            </div>
          
        </div>
      </div>
    </>
  );
};

export default App;
