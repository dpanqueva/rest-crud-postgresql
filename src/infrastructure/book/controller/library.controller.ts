import { Body, Controller, Post } from '@nestjs/common';
import { CreateUseCase } from 'src/application/book/createusecase';
import { Book } from 'src/domain/book/entity/book';
import { BookDto } from '../dto/bookdto';

@Controller('library')
export class LibraryController {

    constructor(private createCaseUse: CreateUseCase){}

    @Post()
    create(@Body() book: BookDto): Promise<Book>{
        return this.createCaseUse.create(book);
    }
    
}
