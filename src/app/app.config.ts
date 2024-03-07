import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp({"projectId":"e-commerce-ac61e","appId":"1:811314609246:web:30377aa40f401f7ac3c8cf","storageBucket":"e-commerce-ac61e.appspot.com","apiKey":"AIzaSyATnSez6UNcdpJ90UG7Lh4y8aCpX0O3rks","authDomain":"e-commerce-ac61e.firebaseapp.com","messagingSenderId":"811314609246"})),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideDatabase(() => getDatabase())
    ]),
  ]
};
