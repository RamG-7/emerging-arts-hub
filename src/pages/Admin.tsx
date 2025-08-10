import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Seo from "@/seo/Seo";

const Admin = () => {
  return (
    <div className="container space-y-4">
      <Seo title="Admin — The Gallery" description="Demo admin tools stub." canonical="/admin" />
      <h1 className="text-2xl font-semibold">Admin-lite</h1>
      <div className="flex flex-wrap gap-3">
        <Button onClick={()=>toast({ title: "Set Weekly Spotlight", description: "Demo only" })}>Set Weekly Spotlight</Button>
        <Button variant="secondary" onClick={()=>toast({ title: "Seed Content", description: "Demo only" })}>Add Seed Content</Button>
        <Button variant="outline" onClick={()=>toast({ title: "Reset Demo", description: "Demo only" })}>Reset Demo</Button>
      </div>
    </div>
  );
};

export default Admin;
