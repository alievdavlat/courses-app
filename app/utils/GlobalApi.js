const { gql, default: request } = require("graphql-request");

const MASTER_URL = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cltshuto80i4k07wgtzlbzium/master';

const getAllCourseList = async () => {
  const query = gql`
query Assets {
  courseList {
    description
    demoUrl
    createdAt
    author
    free
    name
    id
    publishedAt
    stage
    tag
    totalChapters
    slug
    updatedAt
    youtubeUrl
  }
}

  `;

  const res = await request(MASTER_URL, query);
  return res;
};

export default { getAllCourseList };
