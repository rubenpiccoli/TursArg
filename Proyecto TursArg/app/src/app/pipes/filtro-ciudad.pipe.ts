import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCiudad'
})
export class FiltroCiudadPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
   
const resultPost=[];
for(const post of value){
  if (post.nombreCiudad.toLowerCase().indexOf(arg.toString().toLowerCase()) > -1){
    resultPost.push(post);

  };
};
return resultPost;

  }

}
