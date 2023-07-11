import { elapsedTime } from "@/lib/elapsedTime";

export default ({ date }: any) => {
    return (
        <section className="flex justify-between items-center px-3">
            <div className="flex items-center">
                <img
                    src="https://avatars.githubusercontent.com/u/125727432?v=4"
                    alt="profileImg"
                    className="w-[40px] h-[40px] rounded-[50%] mr-2"
                />
                <h1>Ateals</h1>
            </div>

            <h4 className="text-sm text-[gray]"> {elapsedTime(date)}</h4>
        </section>
    );
};
