import Image from "next/image";
import Link from "next/link";

export function LandingPage() {
  return (
    <>
      <div className="bg-white py-12 dark:bg-slate-900 sm:py-16 lg:py-24">
        <div className="container flex flex-col items-center space-y-6 px-4 md:flex-row md:space-y-0 md:px-6">
          <div className="space-y-3 text-center md:w-1/2 md:pr-12 md:text-left lg:space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-black dark:text-slate-100 sm:text-5xl md:text-6xl/none lg:text-7xl/none">
              Altijd de juiste boodschappen
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Maak en beheer je boodschappenlijstje. Snel. Eenvoudig. Altijd
              gesynchroniseerd.
            </p>
            <Link className="btn btn-primary underline" href="/sign-up">
              Maak een account en begin vandaag nog
            </Link>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center md:w-1/2 lg:order-last"
            height="310"
            src="https://utfs.io/f/cdf1e9a2-54a2-47a7-a565-12bc9186ceb6-f50joe.jpg"
            width="550"
          />
          <Link
            className="my-2 rounded-lg bg-green-500 px-2 py-1.5 font-semibold text-white transition-all hover:bg-green-600"
            href={"/sign-up"}
          >
            Registreer
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 py-12 dark:bg-slate-800 sm:py-16 lg:py-24">
        <div className="container space-y-12 px-4 md:grid md:grid-cols-2 md:gap-12 md:space-y-16 lg:gap-24 xl:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 text-center md:items-start md:space-y-4">
            <div className="space-y-2">
              <PhoneIcon className="mx-auto h-12 w-12 rounded-lg border-2 border-green-200 bg-green-200 bg-opacity-50 p-3 dark:bg-gray-800" />
              <div className="space-y-1.5 leading-6">
                <h3 className="text-lg font-bold">Altijd gesynchroniseerd</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Je lijst wordt automatisch bijgewerkt op al je apparaten.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center md:items-start md:space-y-4">
            <div className="space-y-2">
              <UsersIcon className="mx-auto h-12 w-12 rounded-lg border-2 border-green-200 bg-green-200 bg-opacity-50 p-3 dark:bg-gray-800" />
              <div className="space-y-1.5 leading-6">
                <h3 className="text-lg font-bold">Delen met familie</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Voeg items toe en deel ze met je gezin.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center md:items-start md:space-y-4">
            <div className="space-y-2">
              <SmartphoneIcon className="mx-auto h-12 w-12 rounded-lg border-2 border-green-200 bg-green-200 bg-opacity-50 p-3 dark:bg-gray-800" />
              <div className="space-y-1.5 leading-6">
                <h3 className="text-lg font-bold">Slimme organisatie</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sorteer items op categorie voor efficiënt winkelen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// function CalendarCheckIcon(props: IconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//       <line x1="16" x2="16" y1="2" y2="6" />
//       <line x1="8" x2="8" y1="2" y2="6" />
//       <line x1="3" x2="21" y1="10" y2="10" />
//       <path d="m9 16 2 2 4-4" />
//     </svg>
//   );
// }

function PhoneIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SmartphoneIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
