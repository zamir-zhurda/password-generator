import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 includeLetters = false;
 includeNumbers = false;
 includeSymbols = false;
 
 password='';
 length=0;

 onButtonClick() {
  const numbers = '1234567890';
  const letters = 'abcdefghijklmnopqrstuvwyz';
  const symbols = '!@#$%^&*()';
  let validChars = '';

  if(this.includeLetters)
    {
      validChars += letters;
    }

  if(this.includeNumbers){
     validChars += numbers;
  }

  if(this.includeSymbols){
    validChars += symbols;
  }

  let generatedPassword = '';

  for(let i = 0; i < this.length; i++){
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
  }

  this.password = generatedPassword;
 }

 onChangeUseLetters(){
 
  this.includeLetters = !this.includeLetters;
 }

 onChangeUseNumbers(){
  this.includeNumbers = !this.includeNumbers;
 }

 onChangeUseSymbols(){
  this.includeSymbols = !this.includeSymbols;
 }

 onChangeLength(target: EventTarget){

  const value = (<HTMLInputElement>target).value;
  const parsedValue = parseInt(value);
  console.log(value);
  console.log("parsedValue: ",parsedValue);
  if(!isNaN(parsedValue)){
    this.length = parsedValue;
  }
  console.log("length: ",this.length);
 }
}
