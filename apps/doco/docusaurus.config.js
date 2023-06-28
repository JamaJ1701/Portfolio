// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
/** @type {import('@docusaurus').Config} */
const config = {
    title: "Jerry Jeong",
    tagline: "Jerry Jeong's personal documentation",

    favicon: "img/logo.png",

    // Set the production url of your site here
    url: "https://jerryjeong.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "JAMAJ1701", // Usually your GitHub org/user name.
    projectName: "Portfolio", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Jerry Jeong",
                logo: {
                    alt: "Logo of Jerry",
                    src: "img/logo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "projects",
                        position: "right",
                        label: "Projects",
                    },
                    { to: "/blog", label: "Blog", position: "right" },
                    {
                        href: "https://github.com/JAMAJ1701",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Social",
                        items: [
                            {
                                label: "Linkedin",
                                href: "https://www.linkedin.com/in/myoungseok-jeong-34264613b/",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/JAMAJ1701",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Jerry Jeong.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
