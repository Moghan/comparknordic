export enum VehicleTypes {
    Compact,
    Large,
    Handicapped,
    Motorcycle
}

export interface ITicket {
    timeOfArrival: string;
    timeOfDeparture: string;
    cost: number;
    id: number;
  };