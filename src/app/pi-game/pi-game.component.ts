import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const resetScene: any;

@Component({
  selector: 'app-pi-game',
  templateUrl: './pi-game.component.html',
  styleUrls: ['./pi-game.component.scss'],
})
export class PiGameComponent implements OnInit ,AfterViewInit{
  constructor() {}
  
  ngOnInit() {}

  ngAfterViewInit(): void {
    resetScene();
  }
}
