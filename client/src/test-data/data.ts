import { VehicleTypes } from '../utils/commonInterfaces'

const garages = [
    {
        id: "1001",
        name: "test-data-garage",
        description: "just a test object",
        floors: [
            {
                spots: [
                    {
                        id: 9000,
                        free: false,
                        type: VehicleTypes.Compact 
                    },{
                        id: 9001,
                        free: true,
                        type: VehicleTypes.Motorcycle
                    }
                ]
            },
            {
                spots: [
                    {
                        id: 9002,
                        free: true,
                        type: VehicleTypes.Large 
                    },{
                        id: 9004,
                        free: false,
                        type: VehicleTypes.Compact
                    },{
                        id: 9005,
                        free: false,
                        type: VehicleTypes.Compact
                    },{
                        id: 9006,
                        free: true,
                        type: VehicleTypes.Large
                    },
                    {
                        id: 9007,
                        free: true,
                        type: VehicleTypes.Compact 
                    },{
                        id: 9008,
                        free: true,
                        type: VehicleTypes.Compact
                    },{
                        id: 9009,
                        free: true,
                        type: VehicleTypes.Compact
                    },{
                        id: 9010,
                        free: false,
                        type: VehicleTypes.Large
                    },{
                        id: 9011,
                        free: false,
                        type: VehicleTypes.Motorcycle
                    }
                ]
            }
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
    },
    {
        id: "2002",
        name: "Second Garage",
        description: "another test string",
        floors: [
            {
                spots: [
                    {
                        id: 9012,
                        free: false,
                        type: VehicleTypes.Compact 
                    },{
                        id: 9013,
                        free: true,
                        type: VehicleTypes.Motorcycle
                    }
                ]
            }
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
]

export { garages };