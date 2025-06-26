import SocialIcon from "../../common/Icons/SocialIcon";




interface SocialLinkProps {
  href: string;
  text: string;
  icon: {
    title: string;
    path: string;
  };
}

 const SocialLink: React.FC<SocialLinkProps> = ({ href, text, icon }) => (
  <a
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    className="flex items-center space-x-2 text-lg hover:text-orange-400"
  >
    <SocialIcon title={icon.title} path={icon.path} />
    <span className="text">{text}</span>
  </a>
);

export default SocialLink;