import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions } from 'ng-apexcharts';
import { FinanceService } from 'app/modules/admin/dashboards/finance/finance.service';
import { HttpClient } from '@angular/common/http';



@Component({
    selector       : 'finance',
    templateUrl    : './finance.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinanceComponent 
{ 
     // bsPermissionsModalRef: BsModalRef<AddProductDetailComponent>;



  
    displayedColumns: string[] = ['name', 'price', 'amount' , 'action'];
  
    dataSource = new MatTableDataSource();
  
    constructor(
          private http: HttpClient,

    ) { }
  
    ngOnInit() {
    //   this.http.get().subscribe((res )=>{
    //     console.log(res);
    //   });
  
      this.http.get<any>(`http://localhost:3000/openbill`).subscribe(response => {
        this.dataSource = new MatTableDataSource(response.data) ;
        console.log("show Data" , this.dataSource);
  
        
      })
    }
  
      applyFilter(filterValue : string){
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    
      addProduct(): void {
        // this.bsPermissionsModalRef = this.modalService.show(
        //   AddProductDetailComponent,
        //   {
        //     class: "gray modal-lg",
        //     ignoreBackdropClick: true,
        //   }
        // );
      }
}
