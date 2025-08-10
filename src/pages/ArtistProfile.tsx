import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { byId, works as seedWorks, updates as seedUpdates } from "@/data/seed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/common/ProgressBar";
import DonateModal from "@/components/overlays/DonateModal";
import Seo from "@/seo/Seo";

const ArtistProfile = () => {
  const { slug } = useParams();
  const artist = byId.artistBySlug(slug!);
  const [follow, setFollow] = useState(false);
  const [open, setOpen] = useState(false);

  const works = useMemo(() => seedWorks.filter(w => w.artistId === artist?.id), [artist?.id]);
  const updates = useMemo(() => seedUpdates.filter(u => u.artistId === artist?.id), [artist?.id]);
  const ogImage = works.find(w => w.mediaUrl)?.mediaUrl;

  if (!artist) return <div className="container">Artist not found.</div>;

  const progress = artist.donation.hasGoal && artist.donation.goalAmount
    ? Math.round(((artist.donation.raisedAmount ?? 0) / artist.donation.goalAmount) * 100)
    : 0;

  return (
    <div className="space-y-6">
      <Seo title={`${artist.name} — The Gallery`} description={artist.bio} canonical={`/artist/${artist.slug}`} image={ogImage} />
      <header className="container">
        <div className="h-40 w-full rounded-xl overflow-hidden bg-muted">
          {artist.coverUrl && <img src={artist.coverUrl} alt={`${artist.name} cover`} className="h-40 w-full object-cover" loading="lazy" />}
        </div>
        <div className="flex items-end gap-4 -mt-8">
          <img src={artist.avatarUrl} alt={`${artist.name} avatar`} className="h-20 w-20 rounded-full ring-4 ring-background object-cover" />
          <div className="flex-1">
            <h1 className="text-3xl font-semibold">{artist.name}</h1>
            <p className="text-sm text-muted-foreground">{artist.mediums.join(" • ")}{artist.location ? ` • ${artist.location}`: ""}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={()=>setFollow(v=>!v)}>{follow ? "Following" : "Follow"}</Button>
            <Button onClick={()=>setOpen(true)}>Support</Button>
          </div>
        </div>
      </header>

      <section className="container">
        <Tabs defaultValue="portfolio">
          <TabsList>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="donate">Donate</TabsTrigger>
          </TabsList>
          <TabsContent value="portfolio" className="mt-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {works.map(w => (
                <div key={w.id} className="rounded-xl overflow-hidden ring-1 ring-border bg-muted">
                  {w.mediaUrl && <img src={w.mediaUrl} alt={w.title} className="h-48 w-full object-cover" loading="lazy" />}
                  <div className="p-3 text-sm">
                    <div className="font-medium">{w.title}</div>
                    <div className="text-muted-foreground">{w.medium}</div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="updates" className="mt-4">
            <div className="space-y-4">
              {updates.map(u => (
                <div key={u.id} className="rounded-xl border p-4 bg-card">
                  <div className="text-sm text-muted-foreground mb-2">{new Date(u.createdAt).toLocaleString()}</div>
                  <p>{u.body}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="about" className="mt-4">
            <div className="rounded-xl border p-4 bg-card space-y-2">
              <h3 className="font-semibold">Bio</h3>
              <p className="text-sm text-muted-foreground">{artist.bio}</p>
              <h3 className="font-semibold mt-4">Tools & Influences</h3>
              <p className="text-sm text-muted-foreground">To be added by the artist.</p>
            </div>
          </TabsContent>
          <TabsContent value="donate" className="mt-4">
            <div className="rounded-xl border p-4 bg-card space-y-3 max-w-lg">
              {artist.donation.hasGoal ? (
                <>
                  <div className="flex justify-between text-sm">
                    <span>Funding goal</span>
                    <span>{artist.donation.raisedAmount} / {artist.donation.goalAmount}</span>
                  </div>
                  <ProgressBar value={progress} />
                </>
              ) : (
                <p className="text-sm text-muted-foreground">No public goal set.</p>
              )}
              <div className="flex gap-2">
                <button className="px-3 py-2 rounded-lg bg-secondary">One-time</button>
                <button className="px-3 py-2 rounded-lg bg-secondary">Monthly</button>
              </div>
              <Button onClick={()=>setOpen(true)}>Support Artist</Button>
              <p className="text-xs text-muted-foreground">Thank you for supporting independent artists.</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <DonateModal open={open} onOpenChange={setOpen} artistName={artist.name} />
    </div>
  );
};

export default ArtistProfile;
