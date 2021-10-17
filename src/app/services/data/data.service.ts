import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { GET_DATA } from 'src/app/queries/data/data';
import { Repo } from 'src/app/shared/interfaces/data.interface';
import { environment } from 'src/environments/environment';

const HEADERS = {
  headers: new HttpHeaders().set("Authorization", "Bearer " + environment.TESTING_API_TOKEN),
};



@Injectable({
  providedIn: 'root'
})
export class DataService {

private repoSubject = new BehaviorSubject<Repo[]>([]);
repos$ = this.repoSubject.asObservable();

  constructor(private apollo: Apollo) { }

getDataByTopicAndStars(topic:string, stars:number){


   return this.apollo.watchQuery<any>({
    query: GET_DATA,
    variables:{
      "query": `topic:${topic} stars:>${stars}`
    },
    context: HEADERS
  }).valueChanges.pipe(
    take(1),
    tap(({data}) => {
      let {search: {repos}} = data;
      repos = repos.map(x => x = x.repo)
      
      this.repoSubject.next(repos);
      
    })
  )
}

}
