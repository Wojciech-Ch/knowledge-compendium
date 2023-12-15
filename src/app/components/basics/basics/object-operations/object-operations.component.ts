import { Component, OnInit } from '@angular/core';

interface ExampleObject {
  idProduktu: number;
  nazwa: string;
  cena: number;
  kategoria: string;
  dostępność: boolean;
  tagi: string[];
  ocena?: number; 
}


@Component({
  selector: 'app-object-operations',
  templateUrl: './object-operations.component.html',
  styleUrls: ['./object-operations.component.css']
})
export class ObjectOperationsComponent implements OnInit {

 exampleObject: ExampleObject = {
    idProduktu: 101,
    nazwa: 'Super Produkt',
    cena: 299,
    kategoria: 'Elektronika',
    dostępność: true,
    tagi: ['nowość', 'bestseller']
  };



constructor() { }

ngOnInit(): void {
  this.addFieldToObject(this.exampleObject, "ocena")
  this.updateCena(1337)
  this.removeOcena()
  this.checkIfObjectHasProperty()
  this.copyObject(),
  this.spearateKeysValuesAndPairs()

}

addFieldToObject(exampleObject: any, ocena: string){
  exampleObject[ocena] = 4.5
  console.log(exampleObject)
}
updateCena(newCena: number): void {
  this.exampleObject.cena = newCena;
}
removeOcena(): void {
  delete this.exampleObject.ocena 
}
checkIfObjectHasProperty() {
  console.log('kategoria' in this.exampleObject); 
}
copyObject() {
  let kopia = Object.assign({}, this.exampleObject);
  console.log("kopia",kopia)
}
spearateKeysValuesAndPairs(){
  let klucze = Object.keys(this.exampleObject);
  let wartosci = Object.values(this.exampleObject);
  let pary = Object.entries(this.exampleObject);

  console.log("klucze",klucze)
  console.log("wartosci",wartosci)  
  console.log("pary",pary)
}
}