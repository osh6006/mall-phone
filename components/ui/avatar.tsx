import Image from "next/image";

interface AvatarProps {
  src: string;
  title?: string;
  date?: string;
  isPrivate?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, title, date, isPrivate }) => {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src={src}
        alt="avatar"
        className="rounded-full aspect-square border"
        width={40}
        height={40}
      />
      <div>
        <h4>{isPrivate ? `${title && nameToPrivate(title)}` : title}</h4>
        <p className="text-sm text-neutral-400">{date}</p>
      </div>
    </div>
  );
};

function nameToPrivate(name: string) {
  const newName = name.substring(0, 1);
  return newName + "*".repeat(name.length - 2);
}

export default Avatar;
