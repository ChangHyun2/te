import ImageLoader from "./ImageLoader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <section className="p-10">
        <ImageLoader />
      </section>
    </main>
  );
}
