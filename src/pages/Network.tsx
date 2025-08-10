import { updates, artists } from "@/data/seed";
import UpdateCard from "@/components/cards/UpdateCard";
import Seo from "@/seo/Seo";

const Network = () => {
  const topArtists = artists.slice(0,4);
  return (
    <div className="space-y-6">
      <Seo title="Arts Network — The Gallery" description="Progress updates and works-in-progress from creators you love." canonical="/network" />
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6 max-w-2xl">
          <div className="rounded-xl border bg-card p-4 text-muted-foreground">Composer placeholder (MVP)</div>
          {updates.map((u)=> (
            <UpdateCard key={u.id} post={u} />
          ))}
        </div>
        <aside className="hidden lg:block space-y-4">
          <div className="rounded-xl border p-4 bg-card">
            <h3 className="font-semibold mb-3">Top Artists to Follow</h3>
            <ul className="space-y-3 text-sm">
              {topArtists.map((a)=> (
                <li key={a.id} className="flex items-center gap-3">
                  <img src={a.avatarUrl} alt={`${a.name} avatar`} className="h-8 w-8 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-medium leading-tight">{a.name}</div>
                    <div className="text-muted-foreground text-xs">{a.mediums.join(" • ")}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h3 className="font-semibold mb-3">Upcoming Events</h3>
            <p className="text-sm text-muted-foreground">Community meetups and showcases coming soon.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Network;
