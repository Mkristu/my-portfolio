import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private crud: AngularFirestore) { }
  save(newItem: object) {
    return this.crud.collection('TechStack').add(newItem).then(res=>{
      return res;
    })
  }
  get(){
    return this.crud.collection('TechStack').snapshotChanges();
  }
}
