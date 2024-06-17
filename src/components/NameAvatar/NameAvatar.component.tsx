import { NameAvatarProps } from "./NameAvatar"

const getInitials = (name: string) => {
  if(name){
    let words = name.split(' ');
    let initials = words.map(word => word.charAt(0));

    let initialsString = initials.join('');

    return initialsString.slice(0, 3);
  }
  return 'NA';
}

const NameAvatar = (props: NameAvatarProps) => {
  const { name } = props;
  return (
    <div className="p-2 bg-slate-100 text-2xl text-bold text-black rounded-full font-semibold">{getInitials(name)}</div>
  )
}

export default NameAvatar