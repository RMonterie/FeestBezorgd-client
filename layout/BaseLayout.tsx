import React from "react";
import Head from "next/head";
import PageHeader from "../components/page/PageHeader";
import PageFooter from "../components/page/PageFooter";
import "./baseLayout.scss";

interface BaseLayoutProps {
  children: React.ReactNode;
  title: string;
}

/**
 * Base layout in which all pages are wrapped.
 *
 * @returns {JSX.Element}
 */
const BaseLayout: React.FC<BaseLayoutProps> = ({ children, title }) => {
  return (
    <div className="page-container">
      <Head>
        <title>Feestbezorgd - {title}</title>
        <meta property="og:description" content="Feestbezorgd Platform" />
      </Head>
      <PageHeader />
      <div id="body">{children}</div>
      <PageFooter />
    </div>
  );
};

export default BaseLayout;
