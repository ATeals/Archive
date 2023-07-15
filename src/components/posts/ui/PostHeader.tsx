import { elapsedTime } from "@/lib/elapsedTime";

export default ({ date }: any) => {
    return (
        <section className="flex justify-between items-center p-3 w-full">
            <div className="flex items-center">
                <img
                    src="https://avatars.githubusercontent.com/u/125727432?v=4"
                    alt="profileImg"
                    className="w-[40px] h-[40px] rounded-[50%] mr-2 lg:w-[60px] lg:h-[60px]"
                />
                <h1 className="dark:text-darkText lg:text-xl">Ateals</h1>
            </div>

            <h4 className="text-sm text-[gray] dark:text-darkText lg:text-lg"> {elapsedTime(date)}</h4>
        </section>
    );
};
