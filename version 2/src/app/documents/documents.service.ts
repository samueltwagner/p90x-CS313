import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable({ providedIn: 'root' })

export class DocumentsService {
  documentListChangedEvent = new Subject<Document[]>();
  private documents: Document[] = [];

  constructor(private http: HttpClient) { }

  sortAndSend() {
    this.documents.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.documentListChangedEvent.next(this.documents.slice());
  }

  //GET
  getDocuments() {
    this.http.get<{ message: string, documents: Document[] }>
      ('http://localhost:3000/documents')
      .subscribe(
        (documentData) => {
          this.documents = documentData.documents;
          this.sortAndSend();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getDocument(documentId: string): Document {
    for (const document of this.documents) {
      if (document.id === documentId) {
        return document;
      }
    }
    return null;
  }

  //POST
  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }
    else {
      newDocument.id = "";
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      //add to database
      this.http.post<{ message: string, document: Document }>
        ('http://localhost:3000/documents',
          newDocument,
          { headers: headers })
        .subscribe(
          (responseData) => {
            //add new document to documents
            this.documents.push(responseData.document);
            this.sortAndSend();
          }
        );
    }
  }

  //PUT/UPDATE
  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }
    const pos = this.documents.findIndex(d => d.id === originalDocument.id);
    if (pos < 0) {
      return;
    }
    newDocument.id = originalDocument.id;
    newDocument._id = originalDocument._id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //update database
    this.http.put('http://localhost:3000/documents/' + originalDocument.id,
      newDocument, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.documents[pos] = newDocument;
          this.sortAndSend();
        }
      )
  }

  //DELETE
  deleteDocument(document: Document) {
    if (!document) {
      return;
    }
    const pos = this.documents.findIndex(d => d.id === document.id);

    if (pos < 0) {
      return;
    }
    this.http.delete('http://localhost:3000/documents/' + document.id)
      .subscribe(
        (response: Response) => {
          this.documents.splice(pos, 1);
          this.sortAndSend();
        }
      );
  }
}

//   fetchDocuments() {
//     return this.http
//       .get<Document[]>(
//         'https://samueltwagner-cms.firebaseio.com/documents.json'
//       )
//       .subscribe((documents: Document[]) => {
//         this.documents = documents;
//         this.maxDocumentId = this.getMaxId();
//         this.documents.sort((a, b) => (a.name < b.name) ? 1 : (a.name > b.name) ? -1 : 0);
//         this.documentListChangedEvent.next(this.documents.slice());
//         },
//       (error: any) => {
//         console.log(error);
//         }
//       )
//   }

//   storeDocuments() {
//     this.documents = JSON.parse(JSON.stringify(this.documents));
//     const header = new HttpHeaders({'Content-Type': 'json'});
//     this.http
//       .put('https://samueltwagner-cms.firebaseio.com/documents.json', this.documents, {headers: header})
//       .subscribe((returnedDocuments: Document[]) => {
//         this.documentListChangedEvent.next(returnedDocuments.slice());
//       });
//   }

//     getMaxId(): number {
//       let maxId = 0;
//       for (let document of this.documents) {
//         let currentId = +document.id;
//           if (currentId > maxId) {
//             maxId = currentId;
//           }
//           return maxId;
//       }
//     }

//     updateDocument(originalDocument: Document, newDocument: Document){
//       if (!originalDocument  ||  !newDocument){
//         return;
//       }
//       const pos = this.documents.indexOf(originalDocument);
//       if ( pos < 0 ){
//         console.log("No negative indexes");
//         return;
//       }
//       newDocument.id = originalDocument.id;
//       this.documents[pos] = newDocument;
//       this.storeDocuments();
//     }

//     deleteDocument(document: Document) {
//       if (document === null || document === undefined) {
//         return;
//       }
//       const pos = this.documents.indexOf(document);
//       if (pos < 0) {
//         return;
//       }
//       this.documents.splice(pos, 1);
//       this.storeDocuments();
//     }
// }
