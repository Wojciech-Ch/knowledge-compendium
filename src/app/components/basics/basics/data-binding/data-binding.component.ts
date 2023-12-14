import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
constructor(){}
title = 'Witaj w Angularze!';
losowyObrazek = 'https://png.pngtree.com/png-vector/20210628/ourlarge/pngtree-little-smile-emoji-png-image_3506006.jpg';
username = '';

 onClick() {
    alert('Kliknięto przycisk!');
  }















}
