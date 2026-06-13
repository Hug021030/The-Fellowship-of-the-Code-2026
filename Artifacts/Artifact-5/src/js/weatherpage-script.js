// MIDDLE-EARTH WEATHER SCRIPT
// Unsere vier Orte mit ihren echten Koordinaten

const orte = [
{
  name: "rivendell",
  latitude: 46.0,    // Schweizer Alpen
  longitude: 8.0
},
{
  name: "lorien",
  latitude: 48.27,   // Schwarzwald, Deutschland
  longitude: 8.2
}
{
  name: "shire",
  latitude: -37.87,   // Neuseeland
  longitude: 175.68
},
{
  name: "mordor",
  latitude: 23.0,     // mitten in der Sahara
  longitude: 12.0
}
];

// Funktion holt das Wetter für EINEN Ort
async function wetterHolen(ort) {
  // Die Adresse (URL), an die wir unseren Befehl schicken
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${ort.latitude}&longitude=${ort.longitude}&current=temperature_2m`;

  try {
    const antwort = await fetch(url);                 // 1. Anfrage schicken
    const daten = await antwort.json();               // 2. Antwort in JSON umwandeln
    const temperatur = daten.current.temperature_2m;  // 3. Wert herausnehmen

    // 4. Wert in die Seite schreiben
    const tempElement = document.getElementById(`temp-${ort.name}`);
    tempElement.textContent = `${Math.round(temperatur)}°C`;
  } catch (fehler) {
    console.error("Fehler beim Laden des Wetters:", fehler);
  }
}

// Für beide Orte ausfuehren
orte.forEach(wetterHolen);
