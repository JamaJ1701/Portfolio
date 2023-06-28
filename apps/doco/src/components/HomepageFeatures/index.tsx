import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Mainly, A Developer",
        description: (
            <>
                After my personal journey through engineering, UX design and
                development, I decided to focus on development. It&apos;s fun
                because it contains a mixture of engineering and design, just
                the way I like it.
            </>
        ),
    },
    {
        title: "This Portfolio Website",
        description: (
            <>
                At some point of my life, I wanted to document my personal
                history as a developer. I can also host my apps or do personal
                blogging, improving my organisational skills as well. Oh, I was
                also being too ambitious and paid a 3-year webhosting
                subscription...
            </>
        ),
    },
    {
        title: "Applications",
        description: (
            <>
                Although my plan is to make an archive of my previous work, I
                don&apos;t expect people to read a full-on report about my
                projects. Also, I wanted to have an access point for
                applications that I make randomly. So, I decided to host the
                applications on my website.
            </>
        ),
    },
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {/* <Svg className={styles.featureSvg} role="img" /> */}
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
