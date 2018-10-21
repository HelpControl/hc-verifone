import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {
  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.translate.get('ABOUT_VERIFONE').subscribe(
      value => {
        // value is our translated string
         
        console.log('aler', value)
      } 
    )
  }
}
