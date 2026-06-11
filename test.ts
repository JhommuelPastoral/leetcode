// // ph-flights.ts

// export type Flight = {
//   icao: string;
//   callsign: string | null;
//   country: string;
//   lat: number | null;
//   lon: number | null;
//   altitude: number | null;
//   speed: number | null;
//   heading: number | null;
//   onGround: boolean;
//   inPH: boolean;
// };

// const PH_BOUNDS = {
//   minLat: 4.5,
//   maxLat: 21.5,
//   minLon: 116.0,
//   maxLon: 127.0,
// };

// // ---- simple cache (reduces API spam) ----
// let cache: Flight[] = [];
// let lastFetch = 0;
// const CACHE_MS = 15000; // 15 seconds

// function isInPH(lat: number | null, lon: number | null): boolean {
//   if (lat === null || lon === null) return false;

//   return (
//     lat >= PH_BOUNDS.minLat &&
//     lat <= PH_BOUNDS.maxLat &&
//     lon >= PH_BOUNDS.minLon &&
//     lon <= PH_BOUNDS.maxLon
//   );
// }

// function cleanNumber(val: any): number | null {
//   if (val === null || val === undefined) return null;
//   const n = Number(val);
//   return Number.isFinite(n) ? n : null;
// }

// export async function getPHFlights(): Promise<Flight[]> {
//   const now = Date.now();

//   // return cached data if still fresh
//   if (cache.length > 0 && now - lastFetch < CACHE_MS) {
//     return cache;
//   }

//   try {
//     const res = await fetch(
//       "https://opensky-network.org/api/states/all?lamin=4.5&lomin=116.0&lamax=21.5&lomax=127.0"
//     );

//     if (!res.ok) {
//       throw new Error(`HTTP Error: ${res.status}`);
//     }

//     const data = await res.json();
//     const states = data.states;

//     if (!Array.isArray(states)) return [];

//     const flights: Flight[] = states
//       .map((p: any[]): Flight | null => {
//         if (!p || p.length < 16) return null;

//         const lat = cleanNumber(p[6]);
//         const lon = cleanNumber(p[5]);

//         return {
//           icao: p[0],
//           callsign: p[1]?.trim() || null,
//           country: p[2] || "Unknown",
//           lat,
//           lon,
//           altitude: cleanNumber(p[13]),
//           speed: cleanNumber(p[9]),
//           heading: cleanNumber(p[10]),
//           onGround: Boolean(p[8]),
//           inPH: isInPH(lat, lon),
//         };
//       })
//       .filter(Boolean) as Flight[];

//     cache = flights;
//     lastFetch = now;

//     return flights;
//   } catch (err) {
//     console.error("Error fetching flights:", err);
//     return cache; // fallback to last known data
//   }
// }

// /**
//  * OPTIONAL: direct run (safe for Node.js)
//  * Only runs when executing file directly
//  */
// if (typeof require !== "undefined" && require.main === module) {
//   (async () => {
//     const flights = await getPHFlights();

//     console.log("=== PH FLIGHTS ===");
//     console.log("Total:", flights.length);

//     const inPH = flights.filter(f => f.inPH);
//     console.log("Inside PH:", inPH.length);

//     console.log(inPH.slice(0, 10)); // preview first 10
//   })();
// }