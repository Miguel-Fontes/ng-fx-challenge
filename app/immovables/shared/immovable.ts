export class Immovable {

    constructor (
        id: number,
        name: string,
        description: string,
        type: string,
        value: string,
        place: Place[],
        images: Image[],
        contact: string
    ) { }
}

export class Place {
    constructor (
        address: string
    ) { }


}

export class Image {

    constructor (
        desc: string,
        url: string
    ) { }
}
