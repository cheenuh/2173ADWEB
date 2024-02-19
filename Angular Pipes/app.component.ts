import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs';
import {interval} from 'rxjs';
import {OnInit} from '@angular/core';
import { ConstructorFragment } from 'ethers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm';
  presentDate = new Date();
  time$=interval(1000).pipe(map(()=> new Date()))
  price : number = 20000;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  today: Date = new Date();
  pastDate: Date = new Date('2023-01-01');

  object = {
  student_num: '12345',
  name: 'Rachel Greene',
  course: 'BSIT-Web Development'
  };

  array = ['a', 'e', 'i', 'o', 'u'];
  sentence = 'The quick brown fox jumps over the lazy dog';
  text = 'hello world';
  numbers = [2, 4, 6, 8, 10];
  }
