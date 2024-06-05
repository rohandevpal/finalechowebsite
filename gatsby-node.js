const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(async (resolve) => {
    const partnersData = await graphql(`
      {
        allAirtable(filter: { table: { eq: "Partners" } }) {
          nodes {
            data {
              Path
              Name
            }
          }
        }
      }
    `);
    const blogData = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Blog" }
            data: { LinkType: { eq: "Internal" } }
          }
        ) {
          nodes {
            data {
              Path
              Title
            }
          }
        }
      }
    `);

    const eventsData = await graphql(`
      {
        allAirtable(filter: { table: { eq: "Events" } }) {
          nodes {
            data {
              Path
              Title
            }
          }
        }
      }
    `);

    partnersData.data?.allAirtable.nodes.forEach((node) => {
      createPage({
        path: node.data.Path,
        component: path.resolve(
          `./src/reusable/Templates/PartnerDetail/partnerDetail.js`
        ),
        context: {
          Path: node.data.Path,
        },
      });
    });

    eventsData.data?.allAirtable.nodes.forEach((node) => {
      createPage({
        path: node.data.Path,
        component: path.resolve(
          `./src/reusable/Templates/EventDetail/eventDetail.js`
        ),
        context: {
          Path: node.data.Path,
        },
      });
    });

    blogData.data?.allAirtable.nodes.forEach((node) => {
      createPage({
        path: node.data.Path,
        component: path.resolve(
          `./src/reusable/Templates/BlogPage/blogPage.js`
        ),
        context: {
          Path: node.data.Path,
        },
      });
    });
    resolve();
  });
};

