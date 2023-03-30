import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit,
  DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  quantidade:number = 0;

  constructor() { }


  adicionar(){
    this.quantidade += 1;
  }

  decrementar(){
    this.quantidade -= 1;
  }


// Checked -> Content -> View

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');

  }

// Quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('AfterContentInit');

  }

// Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('AfterViewInit');

  }
// Após alguma alteração
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');

  }
  ngDoCheck(): void {
    console.log("DoCheck");

  }

  ngOnInit(): void {
    console.log("OnInit");

  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend");

  }

}
