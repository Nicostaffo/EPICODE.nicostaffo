import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  photos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe((data) => {
        this.photos = data.slice(0, 10);
      });
  }

  deletePhoto(photoId: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .subscribe(() => {
        this.photos = this.photos.filter(photo => photo.id !== photoId);
      });
  }
}
