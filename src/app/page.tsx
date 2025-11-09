import { Button } from "@/components/ui/button";
import {GeneralLayout} from "@/components/layout/GeneralLayout"

export default function Home() {
  return (
    <GeneralLayout>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground font-sans gap-4 p-4">
      <h1 className="text-3xl font-bold">Hello, World!</h1>
    </div>
    </GeneralLayout>
  );
}
