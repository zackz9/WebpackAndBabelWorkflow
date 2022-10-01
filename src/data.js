const cars = [
    {
        brand:'Mercedes-Benz',
        color:'Gray',
        tunned:true

    },
    {
        brand:'BMW',
        color:'White',
        tunned:false

    },
    {
        brand:'Subaru',
        color:'Dark blue',
        tunned:true

    },
    {
        brand:'Mitsubishi',
        color:'Blue',
        tunned:false
    }
]

const getTunnedCars = (cars) => {
    return cars.filter(car => car.tunned)
}

export {cars as default, getTunnedCars};