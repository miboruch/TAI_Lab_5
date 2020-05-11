import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public post = {
    title: '',
    url: '',
    content: ''
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  save() {
    this.dataService.createOrUpdate(this.post).subscribe(f => {
      this.router.navigate(['/blog']);
    });
  }
}
