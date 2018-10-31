import { Injectable,  EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(
    private loggingService: LoggingService
  ) { }

  servers = [
    { name: 'windows', status: 'offline' },
    { name: 'windows', status: 'online' }
  ]

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
    this.loggingService.loggingStatusChange(newAccount.status)
  }
  updateStatus(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.loggingStatusChange(updateInfo.newStatus)
  }

  consoleServers() {
    setTimeout(() => { this.servers.forEach((el) => console.log(el)) }, 0)
  }

  statusUpdated = new EventEmitter<string>();

}
