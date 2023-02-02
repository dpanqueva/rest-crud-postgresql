import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from 'src/domain/book/entity/book';
import { BookDto } from 'src/infrastructure/book/dto/bookdto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindAllUseCase {

    constructor(
        @InjectRepository(Book)
        private bookRepo: Repository< Book >
        ){}

        async findAll(){
            return await this.bookRepo.find();
        }

}
