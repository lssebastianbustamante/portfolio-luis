interface SocialIconProps {
    title: string;
    path: string;
  }
  
  const SocialIcon: React.FC<SocialIconProps> = ({ title, path }) => (
    <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fb733c" className="svg-icon">
        <title>{title}</title>
        <path d={path} />
      </svg>
    </div>
  );

  export default SocialIcon;