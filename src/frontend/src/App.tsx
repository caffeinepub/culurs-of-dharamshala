import { Toaster } from "@/components/ui/sonner";
import DharamshalaMarketplace from "./components/DharamshalaMarketplace";

export default function App() {
  return (
    <>
      <DharamshalaMarketplace />
      <Toaster richColors position="top-right" />
    </>
  );
}
