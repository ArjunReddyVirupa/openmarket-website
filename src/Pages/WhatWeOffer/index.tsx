import React from "react";
import { HoverCard } from "../../Components";

export default function WhatWeOffer() {
  const data = [
    {
      id: 1,
      header: "Green tick",
      content:
        "No Quality, Payment, or Quantity worries to buyers and sellers. Everything will be assured by Openmarket.ag through its green tick services.",
    },
    {
      id: 2,
      header: "Say goodbye to volatility",
      content:
        "openmarket hedging tools guard farmers and buyers from adverse price shocks and financial risks.",
    },
    {
      id: 3,
      header: "Margin trade",
      content:
        "We believe in empowering traders who bridge the gap between farmers and consumers; we offer a margin trade facility to make timely payments to farmers and manage the working capital gap.",
    },
    {
      id: 4,
      header: "Convenience at its best",
      content:
        "Say goodbye to roaming around markets and traveling across states; buyers and sellers can now selling/buying is a matter of seconds.",
    },
    {
      id: 5,
      header: "Analyse & Decide",
      content:
        "Check with all the trends of the market to get deep insights into movements, which helps to make an informed decision.",
    },
  ];
  return (
    <div>
      <div
        className="bootstrap-wrapper"
        // style={{
        //   display: "flex",
        //   flexDirection: isMobile ? "column" : "row",
        //   justifyContent: "center",
        //   alignItems: "stretch",
        //   overflowX: "hidden",
        //   flexWrap: "nowrap",
        //   gap: "0px",
        //   boxSizing: "border-box",
        // }}
      >
        {data.map((cardData) => (
          // <div
          //   key={cardData.id}
          //   className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          // >
          <HoverCard header={cardData.header} content={cardData.content} />
          // </div>
        ))}
      </div>
    </div>
  );
}
