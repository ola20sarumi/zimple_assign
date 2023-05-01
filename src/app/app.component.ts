import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-assign';

  public getbreeds: any;
  public breedLinks: any;
  constructor(private http : HttpClient){

  }
  ngOnInit(): void{
    this.fetchBreeds();
  }
  

  public fetchBreeds(){
    this.http.get('https://dog.ceo/api/breeds/list/all')
    .subscribe((data) => {
      this.getbreeds = data;
    })
  }
}
