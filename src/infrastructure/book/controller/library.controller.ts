import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUseCase } from 'src/application/book/createusecase';
import { FindAllUseCase } from 'src/application/book/findallusecase';
import { Book } from 'src/domain/book/entity/book';
import { BookDto } from '../dto/bookdto';

@Controller('library')
export class LibraryController {

    constructor(private createCaseUse: CreateUseCase, private findCaseUse: FindAllUseCase){}

    @Post()
    create(@Body() book: BookDto): Promise<Book>{
        return this.createCaseUse.create(book);
    }

    @Get()
    findAll(): Promise<Book[]>{
        return this.findCaseUse.findAll();
    }
    
}
