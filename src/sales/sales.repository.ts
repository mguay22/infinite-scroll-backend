import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationParameters } from './dto/pagination-parameters.dto';
import { Sale } from './sale.schema';

@Injectable()
export class SalesRepository {
  constructor(
    @InjectModel(Sale.name) private readonly saleModel: Model<Sale>,
  ) {}

  async getSales(paginationParameters: PaginationParameters): Promise<Sale[]> {
    return this.saleModel.find(
      {},
      {},
      {
        lean: true,
        sort: {
          saleDate: -1,
        },
        ...paginationParameters,
      },
    );
  }

  async countSales(): Promise<number> {
    return this.saleModel.count({});
  }
}
