import { Post, allPosts } from "contentlayer/gererated";

const bodyFilter = (item: Post[]) => {
    return item.map(({ title, date, description, collection, tags, img, _id, _raw, type }) => ({
        title,
        date,
        description,
        collection,
        tags,
        img,
        _id,
        _raw,
        type,
    }));
};

export const getPostAll = bodyFilter(allPosts).filter((post) => !post._raw.sourceFilePath.includes("/index.mdx"));

export const getPost = (url: string) => allPosts.find((post) => post._raw.flattenedPath === url);

export const getTagAll = Array.from(
    new Set(
        getPostAll
            .filter((i) => i.tags)
            .map((i) => i.tags)
            .reduce((start: any, index: any) => [...start, ...index], [])
    )
);
