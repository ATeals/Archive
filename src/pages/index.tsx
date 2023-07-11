import { allPosts } from "contentlayer/gererated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default () => {
    return (
        <>
            <div className="w-full">
                <header className="w-full flex justify-center items-center p-5">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSug1Q3ZKQDSwU2E67ya2wunOZbG7qa7e5NfQ&usqp=CAU"
                        alt="duck"
                        className="w-[80px] h-[80px] rounded-[50%]"
                    />
                </header>
                <main className="w-full flex flex-col mb-[100px]">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </main>
            </div>
            <nav className="w-full bg-white bottom-0 p-3 z-99 fixed  flex justify-around [&>*]:text-[gray]">
                <i className="bi bi-house text-4xl "></i>
                <i className="bi bi-bookmarks text-3xl"></i>
                <i className="bi bi-pen text-3xl"></i>
                <i className="bi bi-link-45deg text-4xl "></i>
                <i className="bi bi-person text-4xl "></i>
            </nav>
        </>
    );
};

const Post = () => {
    const MDXComponent = useMDXComponent(allPosts[0].body.code);
    return (
        <>
            <section className="w-full my-5">
                <article className="flex justify-between items-center px-3">
                    <div className="flex items-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/125727432?v=4"
                            alt="profileImg"
                            className="w-[40px] h-[40px] rounded-[50%] mr-2"
                        />
                        <h1>Ateals</h1>
                    </div>

                    <h4 className="text-sm "> 1시간 전</h4>
                </article>
                <article className="h-[500px] overflow-hidden my-2 ml-8 mr-4 pl-5 flex flex-col items-center border-l-2 border-l-[black] border-solid">
                    <div className="prose prose-sm">
                        <MDXComponent />
                    </div>
                </article>
                <article className="flex mx-6 justify-between">
                    <i className="bi bi-paperclip text-2xl"></i>
                    <div className="mr-2 text-[gray]">#a #b #c</div>
                </article>
            </section>
            <hr />
        </>
    );
};
