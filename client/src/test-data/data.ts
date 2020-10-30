import { VehicleTypes } from '../utils/commonInterfaces'

const garages = [
    {
        id: "1",
        name: "test-data-garage",
        description: "just a test object",
        noFloors: 2,
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
                id: 1111,
                timeOfArrival: "2020-10-21T08:43:03.425Z",
                timeOfDeparture: undefined
            },
            {
                id: 2222,
                timeOfArrival: "2020-10-21T08:44:03.425Z",
                timeOfDeparture: undefined
            },
            {
                id: 3333,
                timeOfArrival: "2020-10-21T07:44:03.425Z",
                timeOfDeparture: undefined
            },
            {
                id: 4444,
                timeOfArrival: "2020-10-21T06:44:03.425Z",
                timeOfDeparture: undefined
            }
        ]
    },
    {
        id: "2",
        name: "Second Garage",
        description: "another test string",
        noFloors: 1,
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
                id: 1111,
                timeOfArrival: "2020-10-21T08:43:03.425Z",
                timeOfDeparture: undefined
            },
            {
                id: 2222,
                timeOfArrival: "2020-10-21T08:44:03.425Z",
                timeOfDeparture: undefined
            },
            {
                id: 3333,
                timeOfArrival: "2020-10-21T07:44:03.425Z",
                timeOfDeparture: undefined
            },
            {
                id: 4444,
                timeOfArrival: "2020-10-21T06:44:03.425Z",
                timeOfDeparture: undefined
            }
        ]
    }
]

const rules = [
    {
        id: 1,
        hour: 1,
        cost: 50
    },
    {
        id: 2,
        hour: 2,
        cost: 30
    },
    {
        id: 3,
        hour: 0,
        cost: 10
    },
]

export { garages, rules };