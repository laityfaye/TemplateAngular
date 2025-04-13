import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-ajout-demande',
  imports: [RouterLink, NgxEditorModule, FileUploadModule],
  templateUrl: './ajout-demande.component.html',
  styleUrl: './ajout-demande.component.scss'
})
export class AjoutDemandeComponent {

}
