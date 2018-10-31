import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({name:accountName, status:accountStatus})
    //this.loggingService.loggingStatusChange(accountStatus);
    this.accountService.consoleServers();
    const newServers = [...this.accountService.servers];
    newServers.push({name: accountName, status: accountStatus})
    this.accountService.servers = newServers;
  }
  ngOnInit(){
    this.accountService.statusUpdated.subscribe((status:string) => alert(`New status: ${status}`))
  }
}
