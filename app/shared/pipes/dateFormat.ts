

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name : 'OrderByDate'
    }
)


export class DateFormat implements PipeTransform{
    transform(value:any, args:any):any {

        let date = new Date(value);


        console.log(date);
        return date;


    }


}