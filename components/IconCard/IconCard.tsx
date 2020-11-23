interface iconCardProps {
  icon: React.ReactNode;
  text: string;
}

/**
 * Component that renders an icon with some text under it.
 *
 * @returns {React.FC}
 */
const IconCard: React.FC<iconCardProps> = ({ icon, text }) => {
  return (
    <div className="icon-card-wrapper">
      <i>{icon}</i>
      <h3>{text}</h3>
    </div>
  );
};

export default IconCard;
