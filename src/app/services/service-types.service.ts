import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypesService {
  baseurl = environment.apiUrl + '/';
  constructor(private http: HttpClient) { }

  addNewServiceTypes(serviceTypes: any) {
    return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/addnew', serviceTypes);
  }

  getServiceTypesById(id: string) {
    return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getbyid', { serviceTypesId: id });
  }

  getServiceTypesAll() {
    return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall', {});
  }

  updateServiceTypesById(serviceTypes: any) {
    return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/update/byid'
    , serviceTypes);
  }

  getServiceTypesParentAll() {
    return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall/parents', {});
  }

  getServiceTypesChildAll() {
    return this.http.post(this.baseurl + 'api/post/servicetypes-blocked/getall/child', {});
  }

  deleteServiceTypesById(documentId: any, deletedBy: any) {
    return this.http.post(this.baseurl + 'api/post/user/servicetypes-blocked/byid', { documentId: documentId, deletedBy: deletedBy });
  }

}
