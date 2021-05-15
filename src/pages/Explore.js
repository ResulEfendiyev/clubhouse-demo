import React from "react";
import style from "../style/explore.module.css";
import {Input} from 'antd'
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";
import Subheader from "../components/Subheader";
function Explore() {
  const { people, conversation } = data;
  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <Subheader pageTitle="EXPLORE"/>
        <Input style={{
          backgroundColor: "#f4f4f4",
          borderRadius: "0.8em",
          padding: "0.8em 1em",
          border: "none",
          boxShadow: "none"
        }}
        size="large"
        placeholder="Find people and clubs"
        prefix={<img src="/images/search.png" width="15px" alt=""/>}
        ></Input>
      </div>
      <h6>People to follow</h6>
      <div className={style.peopleContainer}>
        {people.map((item, index) => (
          <div key={index}>
            <div className="d-flex align-items-center">
              <img src="/images/user-img.jpg" alt="" />
              <div className="ml-2">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          Show more people <DownOutlined />
        </button>
        <h2>Dummy Text</h2>
      </div>
      <h6>Find Conversations About...</h6>
      <div className="row mx-0">
        {conversation.map((item, index) => (
          <div key={index} className="col-6 px-2 mb-3">
            <div className={style.conversation}>
              <h6>
                <FireOutlined />
                {item.title}
              </h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
