import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Bath,
  BedDouble,
  Building2,
  CalendarCheck,
  ChevronDown,
  Flag,
  MapPin,
  MessageCircle,
  Search,
  ShieldAlert,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/hero-lodge.jpg";
import selfconImage from "@/assets/listing-selfcon.jpg";
import bedspaceImage from "@/assets/listing-bedspace.jpg";
import apartmentImage from "@/assets/listing-apartment.jpg";
import lodgeImage from "@/assets/listing-lodge.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/")({
  component: Index,
});

const filters = [
  { label: "School", value: "MOUAU" },
  { label: "Area", value: "Ishiagu / Umudike" },
  { label: "Room type", value: "Self-contained" },
  { label: "Price", value: "₦150k – ₦300k" },
];

const listings = [
  {
    title: "PalmView Self-Con, Ishiagu Gate",
    kind: "Full lodge",
    school: "MOUAU · 6 min walk",
    price: "₦280,000",
    period: "per year",
    image: selfconImage,
    verified: true,
    amenities: ["Prepaid meter", "Borehole", "Tiled"],
  },
  {
    title: "Bedspace in 2-man room, Zik's Flat",
    kind: "Bedspace",
    school: "ABSU · 10 min bike",
    price: "₦95,000",
    period: "per session",
    image: bedspaceImage,
    verified: true,
    amenities: ["Female only", "Fenced", "Study desk"],
  },
  {
    title: "Takeover: 1-bedroom, 7 months left",
    kind: "Takeover",
    school: "MOUAU · Umudike",
    price: "₦185,000",
    period: "remaining tenancy",
    image: apartmentImage,
    verified: false,
    amenities: ["Kitchen", "Water heater", "Parking"],
  },
  {
    title: "Green Court Lodge — 4 rooms left",
    kind: "Full lodge",
    school: "ABSU · Uturu main road",
    price: "₦210,000",
    period: "per year",
    image: lodgeImage,
    verified: true,
    amenities: ["Gated", "Security", "Solar backup"],
  },
];

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Verified before it's featured",
    body: "Our campus reps physically visit lodges and confirm the landlord or agent before a verification badge is issued.",
  },
  {
    icon: CalendarCheck,
    title: "Inspect before you pay",
    body: "Schedule an inspection slot inside the app. No transfer, no deposit, no agent fee until you've stood in the room.",
  },
  {
    icon: Flag,
    title: "Reports go to real humans",
    body: "Reviews, reports and disputes are moderated by the LodgeMate team, and repeat offenders lose their listing rights.",
  },
];

const listingTypes = [
  {
    icon: Building2,
    label: "Full lodges",
    body: "Self-cons, apartments and hostels posted by landlords and agents.",
  },
  {
    icon: BedDouble,
    label: "Bedspaces",
    body: "Students filling a space in a shared room, priced per session.",
  },
  {
    icon: Users,
    label: "Takeovers",
    body: "Transfer the months left on your tenancy to another student.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-canopy text-primary-foreground">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">LodgeMate</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#browse">
              Browse
            </a>
            <a className="transition-colors hover:text-foreground" href="#types">
              Bedspaces
            </a>
            <a className="transition-colors hover:text-foreground" href="#trust">
              How we verify
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm">List a space</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroImage}
            alt="Students walking past a student lodge near campus"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-canopy opacity-90" />
          <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-20 md:pb-20 md:pt-28">
            <Badge className="bg-leaf text-leaf-foreground hover:bg-leaf">
              MOUAU · ABSU · 1,400+ rooms tracked
            </Badge>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl">
              Find a room near campus without the guesswork.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Lodges, bedspaces and takeovers in one place — with prices you can compare,
              landlords you can check, and inspections you book before money moves.
            </p>

            {/* Search bar */}
            <div className="mt-9 rounded-2xl bg-card p-3 shadow-lift">
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <div className="flex flex-1 items-center gap-2 rounded-xl bg-muted px-3">
                  <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <Input
                    placeholder="Search area, lodge name or landmark"
                    className="border-0 bg-transparent shadow-none focus-visible:ring-0"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 md:flex md:items-center">
                  {filters.slice(0, 2).map((f) => (
                    <button
                      key={f.label}
                      className="flex items-center justify-between gap-2 rounded-xl border border-border px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
                    >
                      <span className="text-muted-foreground">{f.label}</span>
                      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  ))}
                </div>
                <Button size="lg" className="md:px-7">
                  Search
                </Button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 px-1">
                {filters.map((f) => (
                  <span
                    key={f.label}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {f.label}: {f.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Listing types */}
        <section id="types" className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-4 md:grid-cols-3">
            {listingTypes.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{t.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Listing grid */}
        <section id="browse" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Fresh near campus</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Updated as students and agents post. Unverified listings are flagged, never hidden.
              </p>
            </div>
            <Button variant="outline">View all listings</Button>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {listings.map((l) => (
              <article
                key={l.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={l.image}
                    alt={l.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 text-xs font-semibold text-foreground">
                    {l.kind}
                  </span>
                  {l.verified ? (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      <BadgeCheck className="h-3.5 w-3.5" /> Verified
                    </span>
                  ) : (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-warning px-2.5 py-1 text-xs font-semibold text-warning-foreground">
                      <ShieldAlert className="h-3.5 w-3.5" /> Unverified
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold leading-snug">{l.title}</h3>
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {l.school}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {l.amenities.map((a) => (
                      <span
                        key={a}
                        className="rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
                    <p className="font-display text-lg font-bold text-primary">
                      {l.price}
                      <span className="ml-1 text-xs font-medium text-muted-foreground">
                        {l.period}
                      </span>
                    </p>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Inspect
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section id="trust" className="border-y border-border bg-warm">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Built for a market that runs on trust.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Word-of-mouth and WhatsApp groups gave you no way to compare prices or confirm a
                landlord exists. LodgeMate keeps the hustle, adds the safeguards.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button>Browse verified lodges</Button>
                <Button variant="outline">Post a bedspace</Button>
              </div>
            </div>
            <div className="grid gap-3">
              {trustPoints.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-clay text-clay-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">From search to keys</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              { icon: Search, step: "01", t: "Filter", d: "School, area, price, room type." },
              { icon: MessageCircle, step: "02", t: "Message", d: "Chat the landlord or student directly." },
              { icon: CalendarCheck, step: "03", t: "Inspect", d: "Pick a slot and see the room." },
              { icon: Zap, step: "04", t: "Move in", d: "Then pay, and review afterwards." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <s.icon className="h-5 w-5 text-primary" />
                  <span className="font-display text-sm font-bold text-muted-foreground">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-9 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-canopy text-primary-foreground">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            <span className="font-display font-bold">LodgeMate</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Student housing for MOUAU & ABSU. Inspect before you pay.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Wifi className="h-4 w-4" /> Amenity data
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-4 w-4" /> Verified photos
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
