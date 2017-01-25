export interface Place {
    address: string;
}

export interface Image {
    desc: string;
    url: string;
}

export interface Immovable {
    id: number;
    name: string;
    description: string;
    type: string;
    value: string;
    place: Place[];
    images: Image[];
    contact: string;
}

export interface RootObject {
    result: Immovable[];
}
