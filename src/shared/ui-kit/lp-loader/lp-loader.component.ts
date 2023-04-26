import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lp-loader',
  templateUrl: './lp-loader.component.html',
  styleUrls: ['./lp-loader.component.scss']
})
export class LpLoaderComponent implements OnInit {
  @Input() Color: string = '#fff'
  @Input() Size: string = '25px'

  constructor() { }

  ngOnInit(): void {
  }

}
