import { useEffect, useMemo, useRef, useState } from "react";
import { MEDIUMS, works as seedWorks, sorters, featured, byId } from "@/data/seed";
import WorkCard from "@/components/cards/WorkCard";
import { FilterBar, SortKey } from "@/components/filters/FilterBar";
import Seo from "@/seo/Seo";
import { useSearchParams } from "react-router-dom";

const CHUNK = 6;

const Stream = () => {
  const [keyword, setKeyword] = useState("");
  const [medium, setMedium] = useState("");
  const [sort, setSort] = useState<SortKey>("Trending");
  const [visible, setVisible] = useState(CHUNK);
  const endRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    let list = seedWorks.slice();
    if (medium) list = list.filter(w => w.medium === medium);
    if (keyword) list = list.filter(w => (w.title + (w.description ?? "") + (w.tags?.join(" ") ?? "")).toLowerCase().includes(keyword.toLowerCase()));
    if (sort === "New") list = list.sort(sorters.newFirst);
    if (sort === "Trending") list = list.sort(sorters.trending);
    if (sort === "Spotlight") {
      const set = new Set(featured.featuredWorkIds);
      list = list.filter(w => set.has(w.id));
    }
    return list;
  }, [keyword, medium, sort]);

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const m = searchParams.get('medium');
    if (m && MEDIUMS.includes(m as any)) setMedium(m);
  }, [searchParams]);

  useEffect(() => {
    setVisible(CHUNK);
  }, [keyword, medium, sort]);

  useEffect(() => {
    const el = endRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible((v) => Math.min(filtered.length, v + CHUNK));
        }
      });
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length]);

  const visibleList = filtered.slice(0, visible);

  return (
    <div className="space-y-6">
      <Seo title="Stream — The Gallery" description="Scroll a mixed-media stream of images, videos, audio, and texts from emerging artists." canonical="/stream" />
      <FilterBar keyword={keyword} onKeyword={setKeyword} medium={medium} onMedium={setMedium} sort={sort} onSort={setSort} mediums={MEDIUMS} />
      <div className="container grid gap-6 max-w-2xl mx-auto">
        {visibleList.map(w => (
          <WorkCard key={w.id} work={w} />
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default Stream;
