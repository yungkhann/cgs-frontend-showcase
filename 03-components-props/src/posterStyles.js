const posterStyles = {
  arrival: "bg-gradient-to-br from-slate-500 via-slate-900 to-black",
  moonlight: "bg-gradient-to-br from-fuchsia-900 via-indigo-950 to-black",
  parasite: "bg-gradient-to-br from-emerald-950 via-stone-900 to-black",
  spirited: "bg-gradient-to-br from-sky-300 via-cyan-700 to-indigo-950",
  interstellar: "bg-gradient-to-br from-amber-200 via-slate-700 to-black",
  budapest: "bg-gradient-to-br from-rose-300 via-red-700 to-amber-950",
  leon: "bg-gradient-to-br from-orange-300 via-zinc-700 to-black",
  pulp: "bg-gradient-to-br from-yellow-300 via-red-700 to-black",
  "remote-0": "bg-gradient-to-br from-slate-500 via-slate-900 to-black",
  "remote-1": "bg-gradient-to-br from-fuchsia-900 via-indigo-950 to-black",
  "remote-2": "bg-gradient-to-br from-emerald-950 via-stone-900 to-black",
  "remote-3": "bg-gradient-to-br from-amber-300 via-red-800 to-black",
};

export function getPosterClass(art) {
  return posterStyles[art] ?? "bg-gradient-to-br from-zinc-600 to-black";
}
