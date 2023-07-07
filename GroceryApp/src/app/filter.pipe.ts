import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], searchText: string): any[] {
    if(!products) return [];
    if(!searchText) return products;
searchText = searchText.toLowerCase();
return products.filter( res => {
      return res.pname.toLowerCase().includes(searchText) || res.cat.toLowerCase().includes(searchText) || res.dscp.toLowerCase().includes(searchText);
    });
   }
}