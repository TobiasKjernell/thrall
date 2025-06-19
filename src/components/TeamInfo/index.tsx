"use client";
import { allTeams } from "@/data/teams";
import { TeamGroup } from "@/types/type";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./team.scss";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";

const TeamInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="teamInfo">
      <div className="teamInfo__container">
        <h1 className="teamInfo__title">The team</h1>
        {allTeams.map((team: TeamGroup, index: number) => (
          <div key={index} className="teamInfo__containerInfo">
             <h2 className="teamInfo__role">{team.role}</h2>
            <div className="teamInfo__ContainerInfoItems">
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="teamInfo__infoContainerflex"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="teamInfo__imageContainer">
                    <img src={`/${member.image}`} alt={member.name} />
                  </div>
                  <div className="teamInfo__content">
                    <h3 className="teamInfo__contentTitle">{member.title}</h3>
                    <h3 className="teamInfo__contentName">{member.name}</h3>
                    <a href={member.link} target="_blank">
                      <LinkedinLogo size={47} className="teamInfo__icon" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
