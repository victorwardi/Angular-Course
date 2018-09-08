import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css']
})
export class ServerComponent {

  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverId  = Math.floor( (Math.random() * 10));
    this.serverStatus =  this.serverId  > 5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return 'The server is ' + this.serverStatus;
  }

  getColor() {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }
  isServerOnline() {
    return this.serverStatus === 'online' ? true : false;
  }
}
