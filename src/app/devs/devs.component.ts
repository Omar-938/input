import { Component } from '@angular/core';


@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent {
  skill  = ["moyen","nul","fort"];

  omar : Devs = new Devs("Omar Bensadia",28,"Homme",)
  

}


export class Devs{
  constructor(
    public name : string,
    public age : Number,
    public gender : string
  ){}
}