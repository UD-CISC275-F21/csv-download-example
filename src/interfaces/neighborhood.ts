import { Household } from "./household";

export interface Neighborhood {
  zipCode: string
  homes: Household[]
}