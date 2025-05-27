import { Routes } from '@angular/router';
import { TesteComponent } from './shared/teste/teste.component';

// Importações das páginas
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AdminAuthComponent } from './pages/admin-auth/admin-auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventsComponent } from './pages/events/events.component';
import { AdminEventsComponent } from './pages/admin-events/admin-events.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EventsActiveComponent } from './pages/events-active/events-active.component';
import { EventsUpcomingComponent } from './pages/events-upcoming/events-upcoming.component';
import { EventsCompletedComponent } from './pages/events-completed/events-completed.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PurchaseDetailsComponent } from './pages/purchase-details/purchase-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrganizerComponent } from './pages/organizer/organizer.component';
import { EventRegisterComponent } from './pages/event-register/event-register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'admin-auth', component: AdminAuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: 'admin-events', component: AdminEventsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'event-details', component: EventDetailsComponent },
  { path: 'events-active', component: EventsActiveComponent },
  { path: 'events-upcoming', component: EventsUpcomingComponent },
  { path: 'events-completed', component: EventsCompletedComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'purchase-details', component: PurchaseDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'organizer', component: OrganizerComponent },
  { path: 'event-register', component: EventRegisterComponent },

  // Rota de teste mantida
  { path: 'teste', component: TesteComponent },
];
