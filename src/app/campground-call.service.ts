import { Injectable } from '@angular/core';
import { ApiKey } from '../../api-key';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()

export class CampgroundCallService {
  constructor(private apikey: ApiKey, private http: Http) { }
  fetchCampgrounds(state){
    return this.http.get('http://ridb.recreation.gov/api/v1/recareas/' + state + '?apikey=' + this.apikey.apikey).map(
      (res) => res.json()
    );
  }
  fetchActiveCampgrounds(state){
    return this.http.get('http://api.amp.active.com/v2/search?near=' + state + '&api_key=' + this.apikey.activeCamping).map(
      (res) => res.json()
    );
  }
}
