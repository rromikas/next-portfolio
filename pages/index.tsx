import React, { useState } from "react";
import Profile from "images/profile.svg";
import Fivver from "images/fiver.svg";
import Card from "components/card";
import { projects } from "projects";
import Background from "images/vscode.png";
import classNames from "classnames";
import { skills } from "skills";

const Portfolio = () => {
  const pages = ["projects", "skills", "about me"];
  const [page, setPage] = useState(0);

  return (
    <>
      <div
        className="fixed left-0 top-0 w-full h-full z-10 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${Background.src})` }}
      ></div>
      <div className="fixed left-0 top-0 w-full h-full z-20 bg-black/20 backdrop-blur-sm"></div>
      <div className="fixed left-0 top-0 w-full h-full z-30 overflow-auto">
        <div className="px-5 pt-5 pb-16 min-h-screen w-full font-[poppins] text-white">
          <div className="flex justify-between mb-">
            <div className="flex items-center">
              <img alt="" className="mr-3" src={Profile.src}></img>
              <div>
                <div className="font-semibold">Romas Laužadis</div>
                <div className="opacity-50">Front-end developer</div>
              </div>
            </div>
            <div>
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => window.open("https://www.fiverr.com/rromikas", "_blank")}
              >
                <img alt="" src={Fivver.src}></img>
                <div className="w-0 text-[#1DBF73] hidden md:block pl-3 font-bold text-lg group-hover:w-[200px] overflow-hidden whitespace-nowrap transition-[width] duration-500">
                  Let's chat on Fiverr
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-7">
            {pages.map((x, i) => (
              <div
                className={classNames(
                  { "border-white": i === page, "border-transparent": i !== page },
                  "border-b-2 mx-3 cursor-pointer select-none"
                )}
                onClick={() => setPage(i)}
                key={`page-ref-${i}`}
              >
                {x}
              </div>
            ))}
          </div>
          {page === 0 ? (
            <div key="page-0" className="flex flex-wrap w-full appear">
              {projects.map((x, i) => (
                <Card key={`project-${i}`} project={x}></Card>
              ))}
            </div>
          ) : page === 1 ? (
            <div key="page-1" className="flex flex-wrap justify-around appear">
              {skills.map((x, i) => (
                <div key={`skill-${i}`} className="p-7 hover:bg-black/40 rounded-xl">
                  <div className="w-[200px] h-[200px] flex">
                    <img src={x.image} alt="" className="m-auto"></img>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <div className="bg-black rounded px-2 py-1">{x.title}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : page === 2 ? (
            <div key="page-2" className="mx-auto p-7 max-w-2xl leading-loose text-xl appear">
              <span className="text-3xl">👋</span> Hi, I am Romas. I am actively programming since 2018. I studied 4 years
              software engineering in Kaunas Technology University. In my free time I like playing chess, cook, watch tv shows and
              movies. I particularly liked Breaking Bad series.
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
