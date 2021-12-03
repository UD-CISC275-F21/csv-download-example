import React from "react";
import { Household } from "../interfaces/household";
import { Neighborhood } from "../interfaces/neighborhood";
import { Pet } from "../interfaces/pet";
import { downloadBlob } from "../utilities/downloads";

export function homeToString(household: Household): string {
    return household.pets.map((pet: Pet): string =>
        `${household.familyName}, ${pet.id}, ${pet.name}, ${pet.kind}`
    ).join("\n");
}

export function downloadCsv(data: Neighborhood[]): void {
    const joined = data.map((neighborhood: Neighborhood): string => 
        // Start each chunk with the ZIP code
        `ZIP Code:,${neighborhood.zipCode}\n`
        // Then have a header
        +"Family Name, Pet ID, Name, Kind\n"
        // Middle layer is joined with one new line between level
        +neighborhood.homes.map(homeToString).join("\n")
    // Outermost layer is joined with three new lines
    ).join("\n\n\n");
    console.log(joined);
    downloadBlob(joined, "neighborhoods.csv", "text/csv");
}

export function DownloadButton({neighborhoods}: {neighborhoods: Neighborhood[]}): JSX.Element {
    return <button onClick={()=>downloadCsv(neighborhoods)}>Download CSV</button>;
}