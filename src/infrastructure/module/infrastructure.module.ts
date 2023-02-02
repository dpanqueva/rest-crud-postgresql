import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUseCase } from 'src/application/book/createusecase';
import { FindAllUseCase } from 'src/application/book/findallusecase';
import { Book } from 'src/domain/book/entity/book';
import { Repository } from 'typeorm';

import { LibraryController } from '../book/controller/library.controller';

@Module({
    imports: [
      Repository,
      TypeOrmModule.forFeature([Book]) 
    ],
    controllers: [LibraryController],
    providers: [CreateUseCase, FindAllUseCase],
    exports: [InfrastructureModule]
  })
export class InfrastructureModule {}
