import { Component, OnInit } from '@angular/core';
import { FacturaService } from './factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers:[FacturaService]
})
export class FacturaComponent implements OnInit {

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
  }

}
