import { Component } from '@stencil/core';

import debug from 'debug';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  private debug; any;
  componentWillLoad() {
    this.debug = debug('my-logger');

    this.debug('something happened');
  }

  componentDidLoad() {
    //this.debug('The component has been rendered');
  }


  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url="/" component="app-home" exact={true} />

            <stencil-route url="/profile/:name" component="app-profile" />
          </stencil-router>
        </main>
      </div>
    );
  }
}
