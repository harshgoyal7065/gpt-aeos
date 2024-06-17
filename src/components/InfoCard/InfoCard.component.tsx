import React from "react";
import { InfoCardProps } from "./InfoCard";
import NameAvatar from "../NameAvatar";
import { GoArrowSwitch } from "react-icons/go";

const InfoCard = (props: InfoCardProps) => {
  const { name, teamName, role, showDisclaimer = true } = props;
  return (
    <div className="p-3 border border-white-primary rounded-lg">
      <div className="flex gap-3">
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
      {showDisclaimer && (
        <p className="text-xs mt-4">Click on this card to switch teams</p>
      )}
    </div>
  );
};

export default InfoCard;
