import { Facebook, Instagram, Github, Linkedin } from "./SocialMediaIcons";

const SocialMedia = () => {

  return (
    <div className="flex gap-3">
      <a href="https://www.facebook.com/scientistbryan" target="_blank" rel="noopener noreferrer">
        <Facebook/>
      </a>
      <a href="https://www.instagram.com/brybryanium/" target="_blank" rel="noopener noreferrer">
        <Instagram/>
      </a>
      <a href="https://github.com/bryancastillo10" target="_blank" rel="noopener noreferrer">
        <Github/>
      </a>
      <a href="https://www.linkedin.com/in/bryan-castillo-479101171/" target="_blank" rel="noopener noreferrer">
        <Linkedin/>
      </a>
    </div>
  )
}

export default SocialMedia;
