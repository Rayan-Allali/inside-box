import React from "react";
import notifIcon from "@/assets/images/shared/notificationIcon.svg";
import Image from "next/image";
import thnuder from "@/assets/images/shared/mdi_thunder.svg";

type HeaderProps = {
  title: string;
  subtitle: string;
  withNotification?: boolean;
  withXP?: boolean;
};

const Header = ({ title, subtitle, withNotification, withXP }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-primary-black font-gilroy">
        <h1 className="text-[32px] font-extrabold leading-normal">{title}</h1>
        <h2 className="text-lg text-[#1B1B1BB8] font-extrabold leading-normal">
          {subtitle}
        </h2>
      </div>
      <div className="flex items-center gap-6">
        {withXP && (
          <button className="rounded-lg bg-[#896DDB] flex items-center gap-1 h-16 w-32 justify-center ">
            <Image alt="thnuder" src={thnuder} />
            <h1 className="text-white">0XP</h1>
          </button>
        )}
        {withNotification && (
          <button className="">
            <Image alt="notifIcon" src={notifIcon} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
