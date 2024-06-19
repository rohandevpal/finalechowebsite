const { config } = require("./config");

module.exports = {
    siteMetadata: {
        siteUrl: "https://echoindia.in",
        title: "ECHO India",
        description: "ECHO India is a non-profit trust working towards building capacities across areas such as Healthcare, Education and other Sustainable Development Goals.",
    },
    // flags: {
    //     DEV_SSR: true
    // },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-remark",
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.35, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations
                duration: 1000,
                // Advanced Options
                selector: "[data-sal]", // Selector of the elements to be animated
                animateClassName: "sal-animate", // Class name which triggers animation
                disabledClassName: "sal-disabled", // Class name which defines the disabled state
                rootMargin: "0% 50%", // Corresponds to root's bounding box margin
                enterEventName: "sal:in", // Enter event name
                exitEventName: "sal:out", // Exit event name
            },
        },
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: config.keys.airtable,
                concurrency: 15, // default, see using markdown and attachments for more information
                tables: [{
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `EmployeesData`,
                        tableView: `DataForWebsite`,
                        mapping: { Attachments: `fileNode` },
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Gallery`,
                        tableView: `DataForWebsite`,
                        mapping: { Attachments: `fileNode` },
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Press`,
                        tableView: `DataForWebsite`,
                        mapping: { Image: `fileNode`, ArticleImage: `fileNode` },
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Events`,
                        tableView: `DataForWebsite`,
                        mapping: {
                            CardImage: `fileNode`,
                            ContentImages: `fileNode`,
                            Content: "text/markdown",
                            BannerImage: `fileNode`,
                        },
                        tableLinks: ["MediaCoverage"],
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Partners`,
                        tableView: `DataForWebsite`,
                        mapping: { Content: "text/markdown", BannerImage: `fileNode` },
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Resources`,
                        tableView: `DataForWebsite`,
                        mapping: { File: `fileNode` },
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Blog`,
                        tableView: `DataForWebsite`,
                        mapping: {
                            Content: "text/markdown",
                            BannerImage: `fileNode`,
                            CardImage: `fileNode`,
                        },
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Banners`,
                        tableView: `DataForWebsite`,
                        mapping: { Image: `fileNode` },
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Stories`,
                        tableView: `DataForWebsite`,
                        mapping: { Image: `fileNode` },
                    },
                    {
                        baseId: `apprs3eDmn4tsmvLY`,
                        tableName: `Publications`,
                        tableView: `DataForWebsite`,
                        mapping: { Image: `fileNode` },
                    },
                ],
            },
        },
        // Not using Contentful for now. Airtable serving as CMS
        // {
        //   resolve: "gatsby-source-contentful",
        //   options: {
        //     accessToken: "_Y20MJ04IqaA3s4yZuniKQY077LcsXO9CMDxetrEEkE",
        //     spaceId: "dyzp6otrro85",
        //   },
        // },
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/assets/images/common/favicon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/assets/",
            },
            __key: "images",
        },
    ],
};