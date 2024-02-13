import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh items-center justify-center p-12">
      <div className="w-full sm:w-1/2 text-center">
        <Image src="/workflow_logo_darkmode.svg" width={450} height={150} alt="WorkFlow" className="mx-auto mb-6 drop-shadow-md" />
        <p className="text-white drop-shadow-md">Streamline work orders for service teams. Create, assign tasks, and integrate seamlessly with Slack and Google Calendars for efficient scheduling.
        </p>
      </div>
    </main>
  );
}
