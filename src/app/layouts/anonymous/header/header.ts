import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';

@Component({
  selector: 'app-anonymous-header',
  imports: [RouterLink, CdkMenu, CdkMenuItem, CdkMenuTrigger],
  templateUrl: './header.html',
})
export class Header {}
