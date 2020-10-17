import { VehicleTypes } from '../utils/commonInterfaces'

const garages = [
    {
        id: "1001",
        name: "test-data-garage",
        description: "just a test object",
        floors: [
            {
                id: "ground_floor_id_asdf",
                spots: [
                    {
                        free: false,
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
                        type: VehicleTypes.Large 
                    },{
                        free: false,
                        type: VehicleTypes.Compact
                    },{
                        free: false,
                        type: VehicleTypes.Compact
                    },{
                        free: true,
                        type: VehicleTypes.Large
                    },
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
                        free: false,
                        type: VehicleTypes.Large
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
        id: "3003",
        name: "test-data-garage",
        description: "just a test object",
        floors: [
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
                    },
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
        id: "4004",
        name: "Second Garage",
        description: "another test string",
        floors: [
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


export { garages, floors };