import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = ['pan1', 'pan2', 'pan3'];
  public data1 = [[10, 15, 40]];
}
