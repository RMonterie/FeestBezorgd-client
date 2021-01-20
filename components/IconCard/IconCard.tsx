interface IconCardProps {
  icon: React.ReactNode;
  text: string;
}

/**
 * Component that renders an icon with some text under it.
 *
 */
const IconCard: React.FC<IconCardProps> = ({ icon, text }) => {
  return (
    <div className="icon-card-wrapper">
      <i>{icon}</i>
      <h3>{text}</h3>
    </div>
  );
};

export default IconCard;
