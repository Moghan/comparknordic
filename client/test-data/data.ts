import { VehicleTypes } from '../src/utils/commonInterfaces'

const garage = {
    id: "1001",
    name: "test-data-garage",
    floors: [
        "ground_floor_id_asdf",
        "first_floor_id_jmkum"
    ],
    tickets: [
        {
            id: "ticket1",
            timeOfArrival: 0,
            timeOfPayment: undefined
        },
        {
            id: "ticket2",
            timeOfArrival: 0,
            timeOfPayment: undefined
        }
    ]
}

const ticketTypeAndLocation = [
    {
        ticketId: "ticket1",
        floorId: "ground_floor_id_asdf",
        vehicleType: VehicleTypes.Compact
    },
    {
        ticketId: "ticket2",
        floorId: "first_floor_id_jmkum",
        vehicleType: VehicleTypes.Large
    }
]

const floors = [
    {
        id: "ground_floor_id_asdf",
        spots: [
            {
                free: true,
                type: VehicleTypes.Compact 
            },{
                free: true,
                type: VehicleTypes.Motorcycle
            }
        ]
    },
    {
        id: "first_floor_id_jmkum",
        spots: [
            {
                free: true,
                type: VehicleTypes.Compact 
            },{
                free: true,
                type: VehicleTypes.Compact
            },{
                free: true,
                type: VehicleTypes.Compact
            },{
                free: true,
                type: VehicleTypes.Large
            }
        ]
    }
]


export { garage, floors };