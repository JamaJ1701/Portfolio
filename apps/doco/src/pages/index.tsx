import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

// function HomepageHeader() {
//     const { siteConfig } = useDocusaurusContext();
//     return (
//         <header className={clsx("hero", styles.heroBanner)}>
//             <div className="container">
//                 <h1 className="hero__title">{siteConfig.title}</h1>
//                 <p className="hero__subtitle">Construction in progress....</p>
//                 {/* <div className={styles.buttons}>
//                     <Link
//                         className="button button--secondary button--lg"
//                         to="/docs/intro"
//                     >
//                         Applications (Coming soon)
//                     </Link>
//                 </div> */}
//             </div>
//         </header>
//     );
// }

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Jerry Jeong's portfolio website"
        >
            {/* <HomepageHeader /> */}
            <main>
                <div className="flex flex-col">
                    <h1 className="grow text-6xl text-center m-6">
                        {siteConfig.title}
                    </h1>
                    <p className="grow text-3xl text-center m-6">
                        Construction in progress....
                    </p>
                </div>
            </main>
        </Layout>
    );
}
