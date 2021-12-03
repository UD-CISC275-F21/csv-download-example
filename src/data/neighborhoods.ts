import { Neighborhood } from "../interfaces/neighborhood";


export const INITIAL_DATA: Neighborhood[] = [
    { zipCode: "12345", homes: [
        { familyName: "Johnsons", pets: [
            {id: 1230, kind: "dog", name: "Fido"},
            {id: 5234, kind: "cat", name: "Whiskers"},
            {id: 9243, kind: "dog", name: "Spot"},
        ]},
        { familyName: "Oates", pets: [
            {id: 587234, kind: "dog", name: "Hall"},
            {id: 324234, kind: "chicken", name: "Grain"}
        ]}
    ]},
    { zipCode: "82582", homes: [
        { familyName: "Carter", pets: [
            {id: 2345, kind: "mouse", name: "Salazar"},
            {id: 123, kind: "mouse", name: "Osbourne"},
            {id: 64355, kind: "mouse", name: "Luna"},
            {id: 329084, kind: "mouse", name: "Santiago"}
        ]},
        { familyName: "Wills", pets: [
            {id: 98763, kind: "dog", name: "Frank"},
        ]}
    ]}
];