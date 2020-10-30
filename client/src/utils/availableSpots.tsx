import { VehicleTypes } from './commonInterfaces'


export const totalGarage = (garage: any) => {

    const totalPerFloorArrays = garage.floors.map((floor: any) =>
        floor.spots)
    
    const freePerFloor = totalPerFloorArrays.map((floor: any) =>
        floor.filter((spot: any) =>
            spot.free).length)
        
    const total = totalPerFloorArrays.map((floor: any) =>
        floor.length).reduce((a: number, b: number) => a + b, 0)
    
    const free = freePerFloor.reduce((a: number, b: number) => a + b, 0)
    
    return ({ total, free})
}


export const inGaragePerVehicle = (garage: any) => {
    let spotsPerVehicle: any = {};

    for(const type in VehicleTypes) {
        if(isNaN(Number(type))) {
            const totalPerFloor = garage.floors.map((floor: any) =>
                floor.spots.filter((spot: any) =>
                    spot.vehicleType === VehicleTypes[type]))
            
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

export const onFloorPerVehicle = (spots: any) => {
    let onFloorPerVehicle: any = {};

    for(const type in VehicleTypes) {
        if(isNaN(Number(type))) {
            const total = spots.filter((spot: any) =>{
                console.log("spot", spot, VehicleTypes[type])
                return spot.vehicleType === VehicleTypes[type]
            })
            
            const free = total.filter((spot: any) =>
                spot.free)
            
            onFloorPerVehicle[type] = { total: total.length, free: free.length }
        }
    }
    return onFloorPerVehicle
}