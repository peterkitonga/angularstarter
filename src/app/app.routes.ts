import { Routes } from '@angular/router';
import { Anonymous } from '@src/app/layouts/anonymous/anonymous';
import { Signin } from '@src/app/layouts/anonymous/signin/signin';
import { Signup } from '@src/app/layouts/anonymous/signup/signup';
import { Forgot } from '@src/app/layouts/anonymous/forgot/forgot';
import { ResetPassword } from '@src/app/layouts/anonymous/reset-password/reset-password';

export const routes: Routes = [
  {
    path: 'auth',
    component: Anonymous,
    children: [
      {
        path: 'signin',
        component: Signin
      },
      {
        path: 'signup',
        component: Signup
      },
      {
        path: 'forgot',
        component: Forgot
      },
      {
        path: 'reset',
        component: ResetPassword
      },
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/auth' }
];
