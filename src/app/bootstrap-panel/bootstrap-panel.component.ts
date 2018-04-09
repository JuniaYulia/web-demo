import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.css']
})
export class BootstrapPanelComponent implements OnInit {

  backgroundColor = environment.navBarBackgroundColor;

  constructor() { }

  ngOnInit() {
  }

}
