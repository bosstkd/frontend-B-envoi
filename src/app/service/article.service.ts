import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from '../model/article';
import {FormBuilder , FormGroup , FormControl , ReactiveFormsModule , Validators}
from '@angular/forms';
import { ListArticleComponent } from '../article/list-article/list-article.component';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = '/api/articles';

  host :string = 'http://localhost:8090';
  choixmenu : string  = 'A';
  list : Article[];
   public dataForm:  FormGroup;
  constructor(private http: HttpClient) { }
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getNumero(code : string) {
    return this.http.get(`${this.baseUrl}/7/${code}`);
  }

  createData(formData: FormData): Observable<any> {

    return this.http.post(`${this.baseUrl}`,formData);
  }

  updatedata(code: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${code}`,value);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);
  }


  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});

		return this.http.request(req);
   }
}
