interface Geo {
    lat: string
    lng: string
}

interface Address {
    strees: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

interface Company {
    name: string
    catchPhrase: string
    bs: string
}

//some values are not needed,
//because we don't want them to filled by user when he adds new contact
export interface IContact {
    id?: number
    name: string
    username?: string
    email: string
    address?: Address
    phone: string
    website?: string
    company?: Company
}
