import React from "react";

interface SocialMediaItemProps {
  icon: React.ElementType;
}
const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  icon: Icon,
}: SocialMediaItemProps) => {
  return (
    <div className="p-4 cursor-pointer bg-[#f4f4f5] dark:bg-[#374151] rounded-full">
      <Icon className="w-6 h-6 dark:text-[#29d3cd]" />
    </div>
  );
};

export { SocialMediaItem };
