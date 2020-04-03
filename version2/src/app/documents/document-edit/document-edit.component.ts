import { Component, OnInit, ViewChild } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  // @ViewChild('f', {static:false}) slForm: NgForm;
  originalDocument: Document;
  document: Document;
  editMode: boolean = false;
  id: string;

  constructor(private documentService: DocumentsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          
          if ( this.id == null || this.id == undefined) {
            return this.editMode = false;
          }
          this.originalDocument = this.documentService.getDocument(this.id);
          if ( this.originalDocument == null || this.originalDocument == undefined){
            return;
          }
          this.editMode = true;
          this.document = JSON.parse(JSON.stringify(this.originalDocument));
        }
      );
  }

  onSubmit(form: NgForm) {
     // get values from form’s fields
     const value = form.value;
     const newDocument = new Document('', '', value.name, value.description, value.url, null);
     if(this.editMode == true) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    }
    else {
      this.documentService.addDocument(newDocument);
    }
    this.router.navigate(['/documents'], {relativeTo: this.route});
  }

  onCancel(){
    this.router.navigate(['/documents'], {relativeTo: this.route});
  }


}
