import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from 'src/domain/book/entity/book';
import { BookDto } from 'src/infrastructure/book/dto/bookdto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateUseCase {

    constructor(
        @InjectRepository(Book)
        private createRepo: Repository< Book >
        ){}

    async create(createBookDto: BookDto){
        const book = await this.createRepo.create(createBookDto);
        await this.createRepo.save(book);
        return book;
    }
}
