import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'item-usuario',
  templateUrl: './item-usuario.component.html',
  styleUrls: ['./item-usuario.component.css']
})
export class ItemUsuarioComponent implements OnInit {

  id:number;
  constructor(private oRuta: ActivatedRoute) { 
    oRuta.params.subscribe(x=>{
      this.id= x.id;
    })
  }

  ngOnInit() {
   
  }

}
