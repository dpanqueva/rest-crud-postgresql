import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from 'src/domain/book/entity/book';
import { BookDto } from 'src/infrastructure/book/dto/bookdto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateUseCase {

    constructor(
        @InjectRepository(Book)
        private bookRepo: Repository< Book >
        ){}

    async create(createBookDto: BookDto){
        const book = await this.bookRepo.create(createBookDto);
        await this.bookRepo.save(book);
        const bookDto = book;
        return book;
    }
}
