import LinkButton from "./_components/LinkButton";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full">
        <section className="p-4 bg-slate-900 h-96 w-96">
          calendar
          </section>
      </div>
      <div id="2" className="flex flex-col h-full min-w-96">
        <LinkButton btnText={'create Diary Entry'} href={'/create-entry'} />
        <ul className="pt-6 space-y-6">
          <li>this is where an entry goes</li>
          <li>this is where an entry goes</li>
          <li>this is where an entry goes</li>
        </ul>
      </div>
    </>
  );
}
