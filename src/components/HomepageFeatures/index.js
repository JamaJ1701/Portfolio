import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Somehow A Developer",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        I am a developer, although it is not what my degree is about. In a
        nutshell, I became a developer by following intertwined paths of an
        engineer and UX designer.
      </>
    ),
  },
  {
    title: "The Portfolio Website",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        I always improve my organisational skills, and also wanted an archive of
        my previous works. That&apos;s why I decided to build my own portfolio
        website. Oh, I was also being too ambitious and paid a 3-year webhosting
        subscription...
      </>
    ),
  },
  {
    title: "Application Demos",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Demonstrating my previous work requires more than talking about it. For
        this purpose, I have decided to host the applications on my portfolio
        website! Most of them are from university project, meaning they are not
        very complete and polished. Please bear with me!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
