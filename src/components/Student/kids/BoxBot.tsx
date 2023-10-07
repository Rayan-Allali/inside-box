"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Assets
import XP from "@/assets/images/shared/XP.svg";
import Hi from "@/assets/images/shared/ShakeHand.svg";
import box from "@/assets/images/shared/BoxBot.png";
import userImage from '@/assets/images/shared/Profillogo.svg'
import send from "@/assets/images/shared/send.svg";

type ChatMessage = {
  owner: "user" | "bot";
  content: string;
};

const BoxBot = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([{
    owner: 'bot',
    content: "Hi, I'm BoxBot, I'm so excited to talk about AI, First of all I have few questions about AI & I need your answers about it !"
  }]);

  const inputRef = useRef()
  const [ userMessage, setUserMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    // add message to chat
    setChatMessages(prev => [...prev, {
            owner: 'user',
            content: userMessage
        }]
    )

    // empty input field
    inputRef.current.value = ''


    // send input value to chat api

    // display bot response
    setTimeout(() => {
        setChatMessages(prev => [...prev, {
            owner: 'bot',
            content: "Let's start!"
        }])
    },2000)
  }

  return (
    <div className="p-[40px] flex flex-col gap-[420px]">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-[10px] ">
          <h1 className="text-4xl font-bold max-w-[780px]">
            Hi, this is <span className="text-[#38CFBA]">BoxBot</span> i’ll
            guide you in this course, first of all let’s discuss about “AI”{" "}
          </h1>
        </div>
        <button className=" items-center text-xl font-bold text-white bg-[#896DDB] flex justify-around w-[125px] px-[20px] py-[16px] rounded-[8px]">
          <Image src={XP} alt="XP" width={24} height={24} /> 0 XP
        </button>
      </div>

      {/* Chat Container */}
      <div className="flex flex-col items-center justify-center gap-[48px]">
        <Image src={Hi} alt="handshake" />
        <div className="w-full flex flex-col justify-between gap-8">
          {chatMessages.map((chatMessage, index) => {
            return (
                <div key={chatMessage.owner + index} className={`flex gap-8 ${chatMessage.owner === 'user' ? 'flex-row-reverse self-start' : 'self-end'}`}>
                    <div className="border-[2px] border-[#38CFBA] bg-[#EBFAF8] border-[8px]">
                        <p className="w-[468px] px-8 py-4">
                            {chatMessage.content}
                        </p>
                    </div>
                    <Image src={chatMessage.owner === 'user' ? userImage : box} alt="BoxBot" />
                </div>
            )
          })}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="rounded-t-[64px] bg-[#F9F9F9] h-[124px] w-[861px] border-[1px] border-[#B2B2B2] flex items-center justify-between px-16">
          <input
            ref={inputRef}
            type="text"
            placeholder="Let's talk..."
            className="bg-[#F9F9F9]"
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <Image src={send} alt="send" className="cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default BoxBot;
