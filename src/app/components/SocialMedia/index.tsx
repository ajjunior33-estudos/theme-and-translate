import React from "react";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import { SocialMediaItem } from "./SocialMediaItem";
const SocialMedia: React.FC = () => {
  return (
    <>
      <SocialMediaItem icon={Mail} />
      <SocialMediaItem icon={Twitter} />
      <SocialMediaItem icon={Linkedin} />
      <SocialMediaItem icon={Github} />
    </>
  );
};

export { SocialMedia };
