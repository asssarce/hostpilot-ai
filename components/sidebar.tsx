import Link from "next/link";
import { Bot, Building2, CalendarDays, Gauge, LayoutDashboard, MapPin, MessageSquare, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Guest AI", href: "/dashboard/guest-ai", icon: MessageSquare },
  { label: "Knowledge", href: "/dashboard/knowledge", icon: Bot },
  { label: "Pricing", href: "/dashboard/pricing", icon: Gauge },
  { label: "Local guide", href: "/dashboard/local", icon: MapPin },
  { label: "Activities", href: "/dashboard/activities", icon: CalendarDays },
];

export function Sidebar() {
  return <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r bg-sidebar lg:flex lg:flex-col">
    <div className="flex h-16 items-center gap-3 border-b px-5"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="h-4 w-4" /></div><div><p className="text-sm font-bold">HostPilot AI</p><p className="text-[11px] text-muted-foreground">Hospitality intelligence</p></div></div>
    <div className="flex-1 px-3 py-5"><p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Workspace</p><nav className="space-y-1">{items.map(({ label, href, icon: Icon }) => <Link key={href} href={href} className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground", href === "/dashboard" && "bg-accent font-medium text-accent-foreground")}><Icon className="h-4 w-4" />{label}</Link>)}</nav></div>
    <div className="border-t p-3"><Link href="/dashboard/settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"><Settings className="h-4 w-4" />Settings</Link><div className="mt-3 flex items-center gap-3 rounded-xl bg-muted p-3"><Building2 className="h-4 w-4" /><div className="min-w-0"><p className="truncate text-xs font-semibold">Demo Property</p><p className="truncate text-[11px] text-muted-foreground">Independent hotel</p></div></div></div>
  </aside>;
}
