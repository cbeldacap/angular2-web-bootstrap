import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridTableComponent } from './oasp-ui/grid-table/Grid-table.component';

import { CollapseDirective } from './oasp-ui/directives/collapse.component';
import { LanguageSelectorComponent } from './oasp-ui/language-selector/language-selector.component';
import { ModalDialogComponent } from './oasp-ui/modal-dialog/modal-dialog.component';
import { PaginationComponent } from './oasp-ui/table-pagination/Pagination.component';
import { SearchPanelComponent } from './oasp-ui/search-panel/Search-panel.component';

import { OaspI18n } from './oasp-i18n/oasp-i18n.service';


@NgModule({
  declarations: [
    GridTableComponent,
    LanguageSelectorComponent,
    ModalDialogComponent,
    PaginationComponent,
    SearchPanelComponent,
    CollapseDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    OaspI18n
  ],
  exports: [
    GridTableComponent,
    LanguageSelectorComponent,
    ModalDialogComponent,
    PaginationComponent,
    SearchPanelComponent,
    CollapseDirective
  ]
})
export class OaspModule { }
