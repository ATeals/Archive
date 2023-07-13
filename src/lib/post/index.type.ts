import * as Local from "contentlayer/source-files";

export type PostSimple = {
    _id: string;
    _raw: Local.RawDocumentData;
    type: "Post";
    title: string;
    date: string;
    description: string;
    collection?: string | undefined;
    tags?: string[] | undefined;
    img?: string | undefined;
    /** MDX file body */
};
