import { Component } from '@stencil/core';

import * as debug from 'debug';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  compenentWillLoad() {
    const console: Function = debug('my-logger');

    console('something happened');
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
