import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full sm:w-1/2 text-center">
        <h1 className="text-6xl mb-3 text-white">WorkFlow</h1>
        <p className="text-slate-200">Streamline work orders for service teams. Create, assign tasks, and integrate seamlessly with Slack and Google Calendars for efficient scheduling.
        </p>
      </div>
    </main>
  );
}
