import { VehicleTypes } from './commonInterfaces'


export const inGaragePerVehicle = (garage: any) => {
    let spotsPerVehicle: any = {};

    for(const type in VehicleTypes) {
        if(isNaN(Number(type))) {
            const totalPerFloor = garage.floors.map((floor: any) =>
            floor.spots.filter((spot: any) =>
              spot.type === VehicleTypes[type]))
            
            const freePerFloor = totalPerFloor.map((floor: any) =>
                floor.filter((spot: any) =>
                    spot.free))
              
            const total = totalPerFloor.map((floor: any) =>
                floor.length).reduce((a: number, b: number) => a + b, 0)
            const free = freePerFloor.map((floor: any) =>
                floor.length).reduce((a: number, b: number) => a + b, 0)
        
            spotsPerVehicle[type] = { total, free}
        }
    }

    return spotsPerVehicle
}