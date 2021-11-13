import { Component, OnInit } from '@angular/core';
// @ts-ignore
import grapesjs from 'node_modules/grapesjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editor: any;
  constructor(){

  }
  ngOnInit(){
    const plugins = ['grapesjs-preset-webpage'];
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '1000px',
      width: 'auto',
      storageManager: false,
      plugins: plugins,
      pluginsOpts: {
        'grapesjs-preset-webpage': {

        },
      },
    });
    
  }
}
