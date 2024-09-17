import { Item } from "../types/types";

export async function fetchItems(): Promise<Item[]> {
  let allItems: Item[] = [];
  let nextUrl = "https://pokeapi.co/api/v2/item/";

  // Recorremos todas las páginas de resultados
  while (nextUrl) {
    const response = await fetch(nextUrl);
    
    if (!response.ok) {
      throw new Error("Failed to fetch Items");
    }
    
    const data = await response.json();
    

    // Mapeamos los resultados de la página actual
    const items = data.results.map((item: any) => ({
      id: item.url.split("/").slice(-2, -1)[0],  // Obtener el ID desde la URL
      name: item.name,
    }));

    // Añadimos los ítems de la página actual al array general
    allItems = [...allItems, ...items];

    // Actualizamos la URL para la siguiente página
    nextUrl = data.next;  // Será null cuando lleguemos a la última página
  }

  return allItems;
}

