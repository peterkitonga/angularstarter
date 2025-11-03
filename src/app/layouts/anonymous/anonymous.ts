import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@src/app/layouts/anonymous/header/header';

@Component({
  selector: 'app-anonymous',
  imports: [RouterOutlet, Header],
  templateUrl: './anonymous.html',
})
export class Anonymous {}
