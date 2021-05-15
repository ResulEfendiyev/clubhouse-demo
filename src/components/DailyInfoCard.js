import React from "react";
import style from "../style/dailyCardInfo.module.css";
import data from "../data/dailyCard.json";

function DailyInfoCard() {
  return (
    <div className={style.dailyCard}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <span className="">{item.time}</span>
            <div>
              <span>{item.title}</span>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DailyInfoCard;
