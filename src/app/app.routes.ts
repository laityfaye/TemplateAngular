import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcommerceComponent } from './dashboard/ecommerce/ecommerce.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { enseignantsComponent } from './pages/enseignants/enseignants.component';
import { CrmComponent } from './dashboard/crm/crm.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import { ConnectionsComponent } from './settings/connections/connections.component';
import { PrivacyPolicyComponent } from './settings/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './settings/terms-conditions/terms-conditions.component';
import { DemandesComponent } from './pages/demandes/demandes.component';
import { ListeDemandeComponent } from './pages/demandes/liste-demande/liste-demande.component';
import { AjoutDemandeComponent } from './pages/demandes/ajout-demande/ajout-demande.component';
import { FileManagerComponent } from './pages/file-manager/file-manager.component';
import { MyDriveComponent } from './pages/file-manager/my-drive/my-drive.component';
import { AssetsComponent } from './pages/file-manager/assets/assets.component';
import { ProjectsComponent } from './pages/file-manager/projects/projects.component';
import { PersonalComponent } from './pages/file-manager/personal/personal.component';
import { ApplicationsComponent } from './pages/file-manager/applications/applications.component';
import { MediaComponent } from './pages/file-manager/media/media.component';
import { RecentsComponent } from './pages/file-manager/recents/recents.component';
import { ImportantComponent } from './pages/file-manager/important/important.component';
import { DocumentsComponent } from './pages/file-manager/documents/documents.component';
export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {path: '', component: CrmComponent},
            {path: 'admin', component: EcommerceComponent},
            {
                path: 'pages',
                children: [
                    {path: 'A-traiter',component: ToDoListComponent},
                    {path: 'enseignants',component: enseignantsComponent}
                ]
            },
            {
                path: 'demandes',
                component: DemandesComponent,
                children: [
                    {path: '', component: ListeDemandeComponent},
                    {path: 'add-demande', component: AjoutDemandeComponent}
                ]
            },

            {
                path: 'file-manager',
                component: FileManagerComponent,
                children: [
                    {path: '', component: MyDriveComponent},
                    {path: 'assets', component: AssetsComponent},
                    {path: 'projects', component: ProjectsComponent},
                    {path: 'personal', component: PersonalComponent},
                    {path: 'applications', component: ApplicationsComponent},
                    {path: 'documents', component: DocumentsComponent},
                    {path: 'media', component: MediaComponent},
                    {path: 'recents', component: RecentsComponent},
                    {path: 'important', component: ImportantComponent}
                ]
            },
            
            {path: 'internal-error', component: InternalErrorComponent},
            {path: 'my-profile', component: MyProfileComponent},
            {
                path: 'settings',
                component: SettingsComponent,
                children: [
                    {path: '', component: AccountSettingsComponent},
                    {path: 'change-password', component: ChangePasswordComponent},
                    {path: 'connections', component: ConnectionsComponent},
                    {path: 'privacy-policy', component: PrivacyPolicyComponent},
                    {path: 'terms-conditions', component: TermsConditionsComponent}
                ]
            }
        ]
    },
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },

];