"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bgSignIn from "@/assets/images/SignIn/bleuHand.svg";
import logo from "@/assets/images/shared/logo.svg";
import eye from "@/assets/images/SignIn/eye.svg";
import { useRouter } from "next/navigation";

const admin = [
  {
    email: "allaliryad0@gmail.com",
    pswd: "pswd",
  },
  {
    email: "allalirayan0@gmzil.com",
    pswd: "pswd2",
  },
  {
    email: "allaliayoub0@gmzil.com",
    pswd: "pswd3",
  },
];
const SignIn = () => {
  const router = useRouter();
  const [Clicked, setCLicked] = useState(false);
  const adr = useRef<any>();
  const pswd = useRef<any>();
  useEffect(() => {
    console.log(adr?.current?.value);

    if (Clicked) {
      let i = 0;
      while (i < admin.length && i != -1) {
        if (
          admin[i].email == adr?.current?.value &&
          admin[i].pswd == pswd?.current?.value
        ) {
          i = -1;
          break;
        }
        i++;
      }
      if (i == -1) {
        router.push("/leaderboard");
      } else console.log(" you're not an admin");
    }
  }, [Clicked]);
  return (
    <div className="flex items-center w-full h-[100vh]   ">
      <Image alt="signInpic" src={bgSignIn} />
      <div className="bg-white flex flex-col items-center flex-grow h-full w-1/2 text-center py-32 ">
        <div className=" w-[500px] flex flex-col gap-32 ">
          <div className="flex flex-col gap-10 items-center ">
            <Image alt="logo" src={logo} />
            <p className="text-[#1B1B1B80] font-light text-2xl">
              Veuillez remplir ce qui suit pour accéder à votre compte
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center w-full">
            <input
              required
              ref={adr as any}
              type="text"
              className="w-full p-4 pl-5 border rounded-lg border-[#1B1B1B80] focus:border-[#1B1B1B] "
              placeholder="Email"
            />
            <div className="relative w-full h-max">
              <input
                required
                ref={pswd as any}
                type="password"
                className="w-full p-4 pl-5 border border-[#1B1B1B80] focus:border-[#1B1B1B] rounded-lg relative "
                placeholder="Password"
              />
              <Image
                alt="Eye"
                src={eye}
                className="absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer"
              />
            </div>
            <button
              type="button"
              className="bg-primaryBleu text-white font-semibold w-full p-4 rounded-lg text-2xl "
              onClick={() => setCLicked(true)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
