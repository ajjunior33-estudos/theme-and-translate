import React from "react";
import { Mail, GalleryThumbnails, Linkedin, Github } from "lucide-react";
import { SocialMediaItem } from "./SocialMediaItem";
const SocialMedia: React.FC = () => {
  return (
    <>
      <SocialMediaItem icon={Mail} link="mailto://andresouza@meraki.dev.br" />
      <SocialMediaItem icon={GalleryThumbnails} link="https://meraki.dev.br" />
      <SocialMediaItem
        icon={Linkedin}
        link="https://www.linkedin.com/in/ajjunior33/"
      />
      <SocialMediaItem icon={Github} link="https://github.com/ajjunior33" />
    </>
  );
};

export { SocialMedia };
