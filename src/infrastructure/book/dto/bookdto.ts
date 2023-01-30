import { IsString } from "class-validator";
import { MinLength } from "class-validator";

export class BookDto {

    @IsString()
    @MinLength(5)
    name: string;

    @IsString()
    @MinLength(10)
    description: string;

}
