export const socialLinks = {
    twitter: "https://twitter.com/ECHOIndiaTrust",
    facebook: "https://www.facebook.com/ECHOIndiaTrust/",
    linkedin: "https://www.linkedin.com/company/echoindia/mycompany/",
    youtube: "https://www.youtube.com/channel/UCrlqLJYrX5BA1MRcB0LbGAg",
};

export const navLinks = [{
        label: "Home",
        type: "single",
        path: "/"
    },
    {
        label: "Who We Are",
        type: "Single",
        path: "/about"
    },

    {
        label: "What we do",
        type: "group",
        children: [{
                label: "Healthcare",
                type: "single",
                path: "/healthcare",
            },
            {
                label: "Education",
                type: "single",
                path: "/education",
            },
            {
                label: "Livelihood",
                type: "single",
                path: "/Livelihood",
            },
            {
                label: "SDG's",
                type: "single",
                path: "/sdg",
            },

        ],
    },
    {
        label: "Resource",
        type: "group",
        children: [{
                label: "Insights",
                type: "single",
                path: "/insights",
            },
            {
                label: "Newsroom",
                type: "single",
                path: "/newsroom",
            },

        ],
    },
    {
        label: "iECHO",
        type: "single",
        path: "/iecho"
    },
    {
        label: "Get Involved",
        type: "group",
        children: [{
                label: "Partner with us",
                type: "single",
                path: "/partnerwithus",
            },
            {
                label: "Careers",
                type: "single",
                path: "/careers",
            },
            {
                label: "Contact",
                type: "single",
                path: "/contact",
            },

        ],
    },
];