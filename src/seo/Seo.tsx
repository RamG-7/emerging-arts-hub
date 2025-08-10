import { Helmet } from "react-helmet-async";

export interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const Seo = ({ title, description, canonical, image = "/opengraph-default.png", type = "website" }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    <meta property="og:type" content={type} />
    {image && <meta property="og:image" content={image} />}
    <meta name="twitter:card" content="summary_large_image" />
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
);

export default Seo;
