import { useMemo, useState } from "react";
import { artists as seedArtists } from "@/data/seed";
import ArtistCard from "@/components/cards/ArtistCard";
import DonateModal from "@/components/overlays/DonateModal";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Seo from "@/seo/Seo";

const Donate = () => {
  const [q, setQ] = useState("");
  const [medium, setMedium] = useState("");
  const [goal, setGoal] = useState("");
  const [loc, setLoc] = useState("");
  const [open, setOpen] = useState(false);
  const [artistName, setArtistName] = useState("");

  const list = useMemo(() => {
    let a = seedArtists.slice();
    if (q) a = a.filter(x => (x.name + x.bio + (x.location ?? "")).toLowerCase().includes(q.toLowerCase()));
    if (medium) a = a.filter(x => x.mediums.includes(medium as any));
    if (loc) a = a.filter(x => (x.location ?? "").toLowerCase().includes(loc.toLowerCase()));
    if (goal === "has") a = a.filter(x => x.donation.hasGoal);
    if (goal === "none") a = a.filter(x => !x.donation.hasGoal);
    return a;
  }, [q, medium, loc, goal]);

  return (
    <div className="space-y-6">
      <Seo title="Donate — The Gallery" description="Support emerging artists. Your contribution helps them create, perform, and publish their next work." canonical="/donate" />
      <section className="container space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search artists" />
          <Select value={medium} onValueChange={setMedium}>
            <SelectTrigger><SelectValue placeholder="Medium" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              {Array.from(new Set(seedArtists.flatMap(a=>a.mediums))).map((m)=> (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={loc} onValueChange={setLoc}>
            <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="">Anywhere</SelectItem>
              {Array.from(new Set(seedArtists.map(a=>a.location).filter(Boolean) as string[])).map((l)=> (
                <SelectItem key={l} value={l}>{l}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={goal} onValueChange={setGoal}>
            <SelectTrigger><SelectValue placeholder="Goal status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any</SelectItem>
              <SelectItem value="has">Has Goal</SelectItem>
              <SelectItem value="none">No Goal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((a)=> (
            <ArtistCard key={a.id} artist={a} onSupport={(artist)=>{ setArtistName(artist.name); setOpen(true); }} />
          ))}
        </div>
      </section>
      <section className="container mt-6">
        <div className="rounded-xl border p-6 bg-card">
          <h2 className="text-2xl font-semibold mb-2">Where your support goes</h2>
          <p className="text-muted-foreground">Your support helps artists create, perform, and publish their next work.</p>
        </div>
      </section>
      <DonateModal open={open} onOpenChange={setOpen} artistName={artistName} />
    </div>
  );
};

export default Donate;
