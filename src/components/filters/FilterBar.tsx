import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type SortKey = "Trending" | "New" | "Spotlight";

export const FilterBar = ({
  keyword,
  onKeyword,
  medium,
  onMedium,
  sort,
  onSort,
  mediums
}: {
  keyword: string;
  onKeyword: (v: string) => void;
  medium: string;
  onMedium: (v: string) => void;
  sort: SortKey;
  onSort: (v: SortKey) => void;
  mediums: string[];
}) => {
  return (
    <div className="sticky top-16 z-30 bg-background/80 backdrop-blur border-b">
      <div className="container py-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <Input value={keyword} onChange={(e)=>onKeyword(e.target.value)} placeholder="Search works..." />
        </div>
        <div className="flex gap-3">
          <Select value={medium} onValueChange={(v)=>onMedium(v === 'all' ? '' : v)}>
            <SelectTrigger className="w-full"><SelectValue placeholder="Medium" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All mediums</SelectItem>
              {mediums.map((m) => (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(v)=>onSort(v as SortKey)}>
            <SelectTrigger className="w-full"><SelectValue placeholder="Sort" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Trending">Trending</SelectItem>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Spotlight">Spotlight</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
