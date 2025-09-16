import Sidebar from "./(featured)/dashboard/components/Sidebar";
import Dashboard from "./(featured)/dashboard/page";

export default function Home() {
  return (
    <section className="flex max-[24px]: min-h-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Dashboard />
      </div>
    </section>
  );
}
