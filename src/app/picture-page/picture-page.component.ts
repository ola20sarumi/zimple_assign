import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css']
})
export class PicturePageComponent {
  public breedName: string = '';
  public imageList: any;

  constructor(private http : HttpClient, private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(data => {
      this.breedName = data['breedName']
      console.log(data);
    })
    this.fetchImages();
  }
  

  public fetchImages(){
    this.http.get(`https://dog.ceo/api/breed/${this.breedName}/images`)
    .subscribe((data) => {
      console.log(data); 
      this.imageList = data;
    })
  }
}
