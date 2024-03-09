import Cards from './cards';

export default function Categories() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="mt-[30px] grid grid-cols-5 gap-[20px]">
        <Cards />
      </div>
    </section>
  );
}
