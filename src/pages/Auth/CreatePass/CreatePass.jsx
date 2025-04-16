import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const CreatePass = () => {
  const [isShowPass, setisShowPass] = useState(false);
  const [confirmPass, setconfirmPass] = useState(false);
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center ">
      <div className=" h-auto p-6 xl:p-8 bg-[#FCFCFC] shadow-lg w-[300px] md:w-[400px] xl:w-[524px] flex flex-col items-center   gap-y-6 xl:gap-y-12 ">
        <div className="flex flex-col gap-y-8 items-center w-full relative ">
          <div className="flex flex-col gap-y-8  items-center w-full relative ">
            <div className="flex flex-col gap-y-2  justify-center items-center ">
              <h2 className=" text-[30px] text-center xl:text-[36px] font-semibold xl:leading-[230.961%]   ">
                Create new password
              </h2>
              <span className="text-[#5A5C5F] text-sm xl:text-[16px]  font-medium leading-[175%] tracking-[-0.064%] text-center ">
                Please enter and confirm your new password. You will need to
                login after you reset.
              </span>
            </div>
            <div className="flex flex-col gap-y-6 w-full relative ">
              <div>
                <span className="text-[16px] font-medium leading-[175%]  tracking-[0.04%]   ">
                  New password
                </span>
                <div className=" relative ">
                  <input
                    type={isShowPass ? "text" : "password"}
                    className="w-full px-5 py-2  bg-transparent border-[1px] border-solid rounded-[8px]  "
                    placeholder="Enter your new password"
                  />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 mr-5">
                    {isShowPass ? (
                      <FaRegEye
                        onClick={() => {
                          setisShowPass(!isShowPass);
                        }}
                        className="text-xl cursor-pointer "
                      />
                    ) : (
                      <FaRegEyeSlash
                        className="text-xl cursor-pointer "
                        onClick={() => {
                          setisShowPass(!isShowPass);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[16px] font-medium leading-[175%]  tracking-[0.04%]   ">
                  Confirm new password
                </span>
                <div className=" relative ">
                  <input
                    type={confirmPass ? "text" : "password"}
                    className="w-full px-5 py-2  bg-transparent border-[1px] border-solid rounded-[8px]  "
                    placeholder="Confirm your new password"
                  />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 mr-5">
                    {confirmPass ? (
                      <FaRegEye
                        onClick={() => {
                          setconfirmPass(!confirmPass);
                        }}
                        className="text-xl cursor-pointer "
                      />
                    ) : (
                      <FaRegEyeSlash
                        className="text-xl cursor-pointer "
                        onClick={() => {
                          setconfirmPass(!confirmPass);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full relative  items-center ">
            <button className="w-full px-3 xl:px-6 py-2 xl:py-4 h-auto bg-[#008A90] font-manrope text-base xl:text-xl font-semibold text-white rounded-[16px] ">
              Reset password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePass;
