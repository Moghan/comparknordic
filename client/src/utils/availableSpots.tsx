import { VehicleTypes } from './commonInterfaces'
import { Spot } from '../types/Spot'


export const totalGarage = (garage: any, spots: Spot[]) => {
    let totalPerFloorArr = []

    for(let floor = 0; floor < garage.noFloors; floor++) {
        totalPerFloorArr.push(spots.filter((spot: Spot) => spot.floor === floor))
    }
    
    const freePerFloor = totalPerFloorArr.map((floor: any) =>
        floor.filter((spot: any) =>
            spot.free).length)
        
    const total = totalPerFloorArr.map((floor: any) =>
        floor.length).reduce((a: number, b: number) => a + b, 0)
    
    const free = freePerFloor.reduce((a: number, b: number) => a + b, 0)
    
    return ({ total, free})
}


export const inGaragePerVehicle = (spots: Spot[]) => {
    let spotsPerVehicle: any = {};

    for(const type in VehicleTypes) {
        if(isNaN(Number(type))) {
            const totalArr = spots.filter((spot: any) =>
                    spot.vehicleType === VehicleTypes[type])
            
            const free = totalArr.filter((spot: any) =>
                    spot.free).length

            const total = totalArr.length
              
            spotsPerVehicle[type] = { total, free}
        }
    }
    return spotsPerVehicle
}

export const onFloorPerVehicle = (spots: any) => {
    let onFloorPerVehicle: any = {};

    for(const type in VehicleTypes) {
        if(isNaN(Number(type))) {
            const total = spots.filter((spot: any) => spot.vehicleType === VehicleTypes[type])
            const free = total.filter((spot: any) =>
                spot.free)
            
            onFloorPerVehicle[type] = { total: total.length, free: free.length }
        }
    }
    return onFloorPerVehicle
}