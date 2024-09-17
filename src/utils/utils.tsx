export function formatPokemonName(name: string): string {
  if (name.includes("\u2640")) {
    return name.replace("\u2640", "-f");
  } else if (name.includes("\u2642")) {
    return name.replace("\u2642", "-m");
  } else if (name.includes(". ")) {
    return name.replace(". ", "-");
  }else if (name.includes("farfetch'd")) {
    return name.replace("farfetch'd", "farfetchd");
  } else return name;
}

export function formatItemName(name:string): string  {
  const formattedName = name.toLowerCase().replace(/[^a-z0-9]/g, '-'); 
  return formattedName;
}

export function waitFor (time: number): Promise<void>{
  return new Promise((resolve) => setTimeout(resolve, time))
}