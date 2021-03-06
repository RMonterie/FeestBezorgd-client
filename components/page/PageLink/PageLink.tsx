import Link from "next/link";

interface Props {
  to: string;
  children: React.ReactNode;
  className?: string;
}
/**
 * Page link component, this component is mostly used
 * to make creating Next links between pages easier because
 * those are written in a very specific way.
 *
 * @returns {JSX.Element}
 */
const PageLink: React.FC<Props> = ({ to, children, className }) => {
  return (
    <Link href={to}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default PageLink;
