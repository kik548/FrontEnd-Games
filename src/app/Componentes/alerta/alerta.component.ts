import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/servicios/alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css'],
})
export class AlertComponent implements OnInit {

  //@Input() inicioCorrecto: boolean = false;

  @Input() alertType: number | undefined;


  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {}

  /*
  inicioCorrectoAlert(){
    this.inicioCorrecto = true;
  }
  */
  eliminarAlerta() {
    this.alertService.setAlertType(0);
  }
  getAlertService(){
    return this.alertService
  }
}
