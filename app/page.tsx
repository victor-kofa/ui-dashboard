import Link from "next/link";
import Sidebar from "./(featured)/dashboard/components/Sidebar";
import Dashboard from "./(featured)/dashboard/page";

export default function Home() {
  return (
    <section className="flex max-[24px] min-h-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Dashboard />
        <div className="">
          <Link
            href="/dashboard-2"
            className="flex justify-center items-center capitalize py-1 px-1"
          >
            <h1 className=" text-center mt-2 rounded-md border w-1/4 hover:bg-gray-300">
              click to view Dashboard 2
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
}
