import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full sm:w-1/2 text-center">
        <h1 className="text-8xl mb-3 text-white">WorkFlow<small className="block text-xl">Work Order Management</small></h1>
        <hr className="w-1/3 mx-auto mb-2" />
        <p className="text-white">Streamline work orders for service teams. Create, assign tasks, and integrate seamlessly with Slack and Google Calendars for efficient scheduling.
        </p>
      </div>
    </main>
  );
}
