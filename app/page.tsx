import { Button } from "@radix-ui/themes";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" px-8 py-8">
      <Button color="gray" variant="surface" > <Link href="/issues/new">new Issue </Link> </Button>
    </main>
  );
}




