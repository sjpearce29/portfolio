import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl leading-tight">My Portfolio</h1>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li>
            CV/About me
          </li>
          <li>
            Lego wishlist
          </li>
          <li>
            Golf application
          </li>
          <li>
            Game(snake or platformer)
          </li>
        </ol>
      </main>
    </div>
  );
}
