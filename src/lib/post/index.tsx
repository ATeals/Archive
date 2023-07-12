import { allPosts } from "contentlayer/gererated";

export const getPostAll = allPosts.filter((post) => !post._raw.sourceFilePath.includes("/index.mdx"));

export const getPost = (url: string) => getPostAll.find((post) => post._raw.flattenedPath === url);

// export const getTags = Array.from(
//     new Set(
//         allPosts
//             .filter((i) => i.tags)
//             .map((i) => i.tags)
//             .reduce((start, index) => [...start, ...index], [])
//     )
// ).map((tag, index) => {
//     const colors = getColor;
//     return {
//         tag,
//         color: {
//             text: colors[index % colors.length].text,
//             bg: colors[index % colors.length].bg,
//             darkText: "#f5f5f5",
//             darkBg: "#5172A5",
//         },
//     };
// });
