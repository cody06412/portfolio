import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
    // Cuztomize Meta Properties
    // Can create extra props and pass as arguments like title in case you want to change for each page.
    const metaDescription = description
        ? description
        : process.env.siteDescription;
    const metaKeywords = keywords ? keywords : process.env.siteKeywords;
    const siteURL = process.env.siteUrl;

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="title" content={title} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />

            {/* {Open Graph} */}
            <meta property="og:url" content={siteURL} key="https://hansmire.vercel.app" />
            <meta property="og:site_name" content={siteURL} key="https://hansmire.vercel.app" />
            <meta property="og:title" content={title} key="cody" />
            <meta
                property="og:description"
                content={metaDescription}
                key="about cody"
            />
            <meta
                property="og:image" 
                content="https://www.imghost.net/ib/iqnYV8P7Ixlq879_1723770453.png"
                alt="cody work history"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            {/* Title */}
            <title>{title}</title>

            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
            <link rel="sitemap" type="application/xml" href="/sitemap.xml" />


        </Head>
    );
};

export default SEO;
