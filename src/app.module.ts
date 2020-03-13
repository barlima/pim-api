import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CategoriesModule } from './categories/categories.module';
import { RoundsModule } from './rounds/rounds.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CategoriesModule,
    RoundsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
