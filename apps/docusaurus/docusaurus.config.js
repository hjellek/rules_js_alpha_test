// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// It is not possible to use a TypeScript config file in Docusaurus unless you compile it yourself to JavaScript.

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Demo',
    tagline: 'very description',

    // Set the production url of your site here
    url: 'https://example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    breadcrumbs: true,
                },
                blog: false,
            }),
        ],
    ],
    plugins: [],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({}),
};

module.exports = config;
