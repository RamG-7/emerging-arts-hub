import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { byId, works as seedWorks } from "@/data/seed";
import Seo from "@/seo/Seo";

const WorkDetail = () => {
  const { id } = useParams();
  const work = byId.work(id!);
  const artist = work ? byId.artist(work.artistId) : undefined;

  const related = useMemo(() => {
    if (!work) return [] as typeof seedWorks;
    return seedWorks.filter(w => (w.medium === work.medium || w.artistId === work.artistId) && w.id !== work.id).slice(0,6);
  }, [work]);

  if (!work || !artist) return <div className="container">Work not found.</div>;

  return (
    <div className="space-y-6">
      <Seo title={`${work.title} — ${artist.name}`} description={work.description} canonical={`/work/${work.id}`} image={work.mediaUrl} type="article" />
      <article className="container grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl overflow-hidden ring-1 ring-border bg-muted">
          {work.type === 'image' && work.mediaUrl && (
            <img src={work.mediaUrl} alt={work.title} className="w-full object-cover" loading="lazy" />
          )}
          {work.type === 'video' && work.mediaUrl && (
            <img src={work.mediaUrl} alt={`${work.title} (video thumbnail)`} className="w-full object-cover" loading="lazy" />
          )}
          {work.type === 'audio' && (
            <div className="p-6 flex items-center gap-4">
              {work.mediaUrl && <img src={work.mediaUrl} alt={`${work.title} cover`} className="h-24 w-24 rounded object-cover" loading="lazy" />}
              <div>
                <div className="font-medium text-lg">{work.title}</div>
                <div className="text-sm text-muted-foreground">30s snippet (demo)</div>
              </div>
            </div>
          )}
          {work.type === 'text' && (
            <div className="p-6">
              {work.mediaUrl && <img src={work.mediaUrl} alt={`${work.title} cover`} className="h-40 w-32 object-cover float-left mr-4 rounded" loading="lazy" />}
              <h1 className="text-2xl font-semibold mb-2">{work.title}</h1>
              <p className="text-sm text-muted-foreground">{work.textExcerpt}</p>
            </div>
          )}
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border p-4 bg-card">
            <div className="flex items-center gap-3">
              <img src={artist.avatarUrl} alt={`${artist.name} avatar`} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="font-medium leading-tight">{artist.name}</div>
                <div className="text-xs text-muted-foreground">{artist.mediums.join(" • ")}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Link to={`/artist/${artist.slug}`} className="px-3 py-2 rounded-lg bg-secondary">Follow</Link>
              <Link to={`/donate`} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground">Support</Link>
            </div>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h3 className="font-semibold mb-2">Details</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Medium: {work.medium}</li>
              <li>Posted: {new Date(work.createdAt).toLocaleDateString()}</li>
              {work.tags && <li>Tags: {work.tags.join(', ')}</li>}
            </ul>
          </div>
        </aside>
      </article>
      <section className="container">
        <h2 className="text-xl font-semibold mb-3">Related works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map(r => (
            <Link key={r.id} to={`/work/${r.id}`} className="rounded-xl overflow-hidden ring-1 ring-border bg-muted">
              {r.mediaUrl && <img src={r.mediaUrl} alt={r.title} className="h-48 w-full object-cover" loading="lazy" />}
              <div className="p-3 text-sm">
                <div className="font-medium">{r.title}</div>
                <div className="text-muted-foreground">{r.medium}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;
