import React from "react";
import { HoverCard } from "../../Components";

export default function WhatWeOffer() {
  const data = [
    {
      id: 1,
      header: "Green tick",
      backgroundImage: "https://openmarket-images.vercel.app/GreenTick.png",
      content:
        "No Quality, Payment, or Quantity worries to buyers and sellers. Everything will be assured by Openmarket.ag through its green tick services.",
    },
    {
      id: 2,
      header: "Say goodbye to volatility",
      backgroundImage: "https://openmarket-images.vercel.app/Voltility.png",
      content:
        "openmarket hedging tools guard farmers and buyers from adverse price shocks and financial risks.",
    },
    {
      id: 3,
      header: "Margin trade",
      backgroundImage: "https://openmarket-images.vercel.app/MarginTrade.png",
      content:
        "We believe in empowering traders who bridge the gap between farmers and consumers; we offer a margin trade facility to make timely payments to farmers and manage the working capital gap.",
    },
    {
      id: 4,
      header: "Convenience at its best",
      backgroundImage: "https://openmarket-images.vercel.app/Convenience.png",
      content:
        "Say goodbye to roaming around markets and traveling across states; buyers and sellers can now selling/buying is a matter of seconds.",
    },
    {
      id: 5,
      header: "Analyse & Decide",
      backgroundImage:
        "https://openmarket-images.vercel.app/AnalyseAndDecide.png",
      content:
        "Check with all the trends of the market to get deep insights into movements, which helps to make an informed decision.",
    },
  ];
  return (
    <div>
      <div className="bootstrap-wrapper">
        {data.map((cardData) => (
          <HoverCard
            key={cardData.id}
            header={cardData.header}
            content={cardData.content}
            backgroundImage={cardData.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
}
