import React from "react";
import { InfoCardProps } from "./InfoCard";
import NameAvatar from "../NameAvatar";
import { GoArrowSwitch } from "react-icons/go";

const InfoCard = (props: InfoCardProps) => {
  const { name, teamName, role } = props;
  return (
    <div className="gap-3 p-3 border border-white-primary rounded-lg">
      <div className="flex">
        <div>
          <NameAvatar name={name} />
        </div>
        <div className="text-left">
          <p>{name}</p>
          <p>
            <span>{teamName}</span> | <span>{role}</span>
          </p>
        </div>
      </div>
      <p className="text-xs mt-4">Click on this card to switch teams</p>
    </div>
  );
};

export default InfoCard;
