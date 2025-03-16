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

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.breedName = data['breedName']; // Get the breed name from the route
      console.log('Breed Name:', this.breedName); // Debugging
      this.fetchImages(); // Fetch images after getting the breed name
    });
  }

  public fetchImages() {
    this.http.get(`https://dog.ceo/api/breed/${this.breedName}/images`)
      .subscribe(
        (data: any) => {
          console.log('API Response:', data); // Debugging
          this.imageList = data.message; // Assign the array of image URLs
          console.log('Image URLs:', this.imageList); // Debugging
        },
        (error) => {
          console.error('Error fetching images:', error);
        }
      );
  }
}