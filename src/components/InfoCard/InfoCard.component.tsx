import React from 'react'
import { InfoCardProps } from './InfoCard';
import NameAvatar from '../NameAvatar';
import { GoArrowSwitch } from 'react-icons/go';

const InfoCard = (props: InfoCardProps) => {
  const {name, teamName, role} = props;
  return (
    <div className='flex gap-3 p-3 border border-white-primary rounded-lg'>
        <div>
            <NameAvatar name={name}/>
        </div>
        <div>
            <p>{name}</p>
            <p><span>{teamName}</span><span>{role}</span></p>
            <p>Click on this card to switch teams</p>
        </div>
    </div>
  )
}

export default InfoCard