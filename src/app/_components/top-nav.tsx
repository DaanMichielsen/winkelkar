import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggle } from "~/components/ui/theme-toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function TopNavLoggedOut() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-green-500 px-4 dark:bg-slate-700 md:px-6">
      <Link className="text-lg font-bold text-white" href="#">
        Winkelkar
      </Link>
      <SignedOut>
        <SignInButton forceRedirectUrl={"/loggedin"}></SignInButton>
      </SignedOut>
      <SignedIn>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Kies een familie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
      </SignedIn>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </header>
  );
}
