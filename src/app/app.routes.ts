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
import { StarterComponent } from './starter/starter.component';
import { IconsComponent } from './icons/icons.component';
import { MaterialSymbolsComponent } from './icons/material-symbols/material-symbols.component';
import { RemixiconComponent } from './icons/remixicon/remixicon.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import { ConnectionsComponent } from './settings/connections/connections.component';
import { PrivacyPolicyComponent } from './settings/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './settings/terms-conditions/terms-conditions.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartsComponent } from './charts/line-charts/line-charts.component';
import { AreaChartsComponent } from './charts/area-charts/area-charts.component';
import { ColumnChartsComponent } from './charts/column-charts/column-charts.component';
import { MixedChartsComponent } from './charts/mixed-charts/mixed-charts.component';
import { RadialbarChartsComponent } from './charts/radialbar-charts/radialbar-charts.component';
import { RadarChartsComponent } from './charts/radar-charts/radar-charts.component';
import { PieChartsComponent } from './charts/pie-charts/pie-charts.component';
import { PolarChartsComponent } from './charts/polar-charts/polar-charts.component';
import { MoreChartsComponent } from './charts/more-charts/more-charts.component';
import { FormsComponent } from './forms/forms.component';
import { InputSelectComponent } from './forms/input-select/input-select.component';
import { CheckboxesRadiosComponent } from './forms/checkboxes-radios/checkboxes-radios.component';
import { RichTextEditorComponent } from './forms/rich-text-editor/rich-text-editor.component';
import { FileUploaderComponent } from './forms/file-uploader/file-uploader.component';
import { TablesComponent } from './tables/tables.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { AlertsComponent } from './ui-elements/alerts/alerts.component';
import { AvatarsComponent } from './ui-elements/avatars/avatars.component';
import { AccordionComponent } from './ui-elements/accordion/accordion.component';
import { BadgesComponent } from './ui-elements/badges/badges.component';
import { ButtonsComponent } from './ui-elements/buttons/buttons.component';
import { BreadcrumbComponent } from './ui-elements/breadcrumb/breadcrumb.component';
import { DropdownsComponent } from './ui-elements/dropdowns/dropdowns.component';
import { ImagesComponent } from './ui-elements/images/images.component';
import { ModalComponent } from './ui-elements/modal/modal.component';
import { PaginationComponent } from './ui-elements/pagination/pagination.component';
import { ProgressComponent } from './ui-elements/progress/progress.component';
import { TypographyComponent } from './ui-elements/typography/typography.component';
import { VideosComponent } from './ui-elements/videos/videos.component';
import { ClipboardComponent } from './ui-elements/clipboard/clipboard.component';
import { PopoverComponent } from './ui-elements/popover/popover.component';
import { TooltipsComponent } from './ui-elements/tooltips/tooltips.component';
import { TabsComponent } from './ui-elements/tabs/tabs.component';
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
            {path: 'starter', component: StarterComponent},
            {
                path: 'icons',
                component: IconsComponent,
                children: [
                    {path: '', component: MaterialSymbolsComponent},
                    {path: 'remixicon', component: RemixiconComponent}
                ]
            },
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
            
            {
                path: 'ui-kit',
                component: UiElementsComponent,
                children: [
                    {path: '', component: AlertsComponent},
                    {path: 'avatars', component: AvatarsComponent},
                    {path: 'accordion', component: AccordionComponent},
                    {path: 'badges', component: BadgesComponent},
                    {path: 'buttons', component: ButtonsComponent},
                    {path: 'breadcrumb', component: BreadcrumbComponent},
                    {path: 'clipboard', component: ClipboardComponent},
                    {path: 'dropdowns', component: DropdownsComponent},
                    {path: 'images', component: ImagesComponent},
                    {path: 'modal', component: ModalComponent},
                    {path: 'pagination', component: PaginationComponent},
                    {path: 'tooltips', component: TooltipsComponent},
                    {path: 'popover', component: PopoverComponent},
                    {path: 'progress', component: ProgressComponent},
                    {path: 'tabs', component: TabsComponent},
                    {path: 'typography', component: TypographyComponent},
                    {path: 'videos', component: VideosComponent}
                ]
            },
            {
                path: 'charts',
                component: ChartsComponent,
                children: [
                    {path: '', component: LineChartsComponent},
                    {path: 'area', component: AreaChartsComponent},
                    {path: 'column', component: ColumnChartsComponent},
                    {path: 'mixed', component: MixedChartsComponent},
                    {path: 'radialbar', component: RadialbarChartsComponent},
                    {path: 'radar', component: RadarChartsComponent},
                    {path: 'pie', component: PieChartsComponent},
                    {path: 'polar', component: PolarChartsComponent},
                    {path: 'more', component: MoreChartsComponent}
                ]
            },
            {
                path: 'tables', component: TablesComponent
            },
            {
                path: 'forms',
                component: FormsComponent,
                children: [
                    {path: '', component: InputSelectComponent},
                    {path: 'checkboxes-radios', component: CheckboxesRadiosComponent},
                    {path: 'rich-text-editor', component: RichTextEditorComponent},
                    {path: 'file-uploader', component: FileUploaderComponent}
                ]
            },
            {path: 'internal-error', component: InternalErrorComponent},
            {path: 'widgets', component: WidgetsComponent},
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
    {path: 'coming-soon', component: ComingSoonComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];