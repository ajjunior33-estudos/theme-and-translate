import React from "react";

interface SocialMediaItemProps {
  icon: React.ElementType;
  link: string;
}
const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  icon: Icon,
  link,
}: SocialMediaItemProps) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="p-4 cursor-pointer bg-[#f4f4f5] dark:bg-[#374151] rounded-full"
    >
      <Icon className="w-6 h-6 dark:text-[#29d3cd]" />
    </a>
  );
};

export { SocialMediaItem };
