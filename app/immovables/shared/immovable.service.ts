import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Immovable } from './immovable.interface'

@Injectable()
export class ImmovableService {

    constructor(
        private http: Http
    ) { }

    list() : Observable<Immovable[]> {

        let url = "http://demo1183916.mockable.io/anuncio";

        return this.http.get(url)
            .map(res => res.json().result)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}







/*
{"result" : [{

"id" : 0,
"name":"Apartamento com 2 Quartos para Alugar, 57 m²",
"description" : "Ótimo apartamento para locação na Rua Apiacás, Perdizes. Com 57 m², 2 dormitórios, sendo 1 suíte, armário planejado nos ambientes, bem ventilado e ensolarado, 1 vaga de garagem. Área de lazer com 2 piscinas, sala de ginástica, jardins. A região conta com completa infraestrutura, como, bancos, restaurantes, serviços, escolas, hospitais, serviços, shopping center, SESC Pompéia, Parque da Água Branca, além de ampla rede de transporte coletivo. Venha conhecer. - 18/07/2016",
"type" : "Appartment",
"value" : "3000",
"place" : [{
"address" : "Rua Apiacás, 1,Perdizes, São Paulo - SP"
}],
"images" : [{
"desc": "Foto 1",
"url" : "http://resizedimgs.vivareal.com/aAJkqf8LzeGGk6gINn0MmQpZCx0=/fit-in/870x653/vr.images.sp/6be1772dfd898a59d16ccb154e0d1f88.jpg"},
{
"desc": "Foto 2",
"url" : "http://resizedimgs.vivareal.com/aAJkqf8LzeGGk6gINn0MmQpZCx0=/fit-in/870x653/vr.images.sp/6be1772dfd898a59d16ccb154e0d1f88.jpg"
}],
"contact" : "(11) 4563-8700"
}]}*/