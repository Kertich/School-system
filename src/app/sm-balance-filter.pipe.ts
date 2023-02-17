import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smBalanceFilter'
})
export class SmBalanceFilterPipe implements PipeTransform {

  transform(students: any[], balanceFilter: string): any[] {
    if (!students || !balanceFilter) {
      return students;
    }

    const balance = parseInt(balanceFilter, 10);
    return students.filter(student => student.balance === balance);
  }

}
