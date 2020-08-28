import { Component, OnInit, ViewChild } from '@angular/core';
import { NotarioService } from '../../services/notario.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-notarios-table',
  templateUrl: './notarios-table.component.html',
  styleUrls: ['./notarios-table.component.css']
})
export class NotariosTableComponent implements OnInit {

  displayedColumns: string[] = ['codigoNotario', 'codigoNotaria', 'nombre', 'apellidos', 'accion'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private notarioService: NotarioService) {
   }

  ngOnInit(): void {
    this.notarioService.getNotarios().then(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}