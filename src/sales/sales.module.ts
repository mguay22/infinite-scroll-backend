import { Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { Sale } from './sale.schema';
import { SalesController } from './sales.controller';
import { SalesRepository } from './sales.repository';
import { SalesService } from './sales.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Sale.name,
        schema: SchemaFactory.createForClass(Sale),
      },
    ]),
  ],
  providers: [SalesService, SalesRepository],
  controllers: [SalesController],
})
export class SalesModule {}
