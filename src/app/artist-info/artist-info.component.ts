import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {

artistInfoForm = new FormGroup({
  artistName: new FormControl('', Validators.required),
  totalAlbums: new FormControl(''),
  grammysWon: new FormControl('', Validators.required),
  bestTrack: new FormControl('', Validators.required)
})


  constructor() { }

  getArtistInfo() {
    console.log(this.artistInfoForm.value)
    this.artistInfoForm.reset()
  }

  


  ngOnInit(): void {
  }

}
