import { Injectable } from '@nestjs/common';
import { PaginationParameters } from './dto/pagination-parameters.dto';
import { Sale } from './sale.schema';
import { SalesRepository } from './sales.repository';

@Injectable()
export class SalesService {
  constructor(private readonly salesRepository: SalesRepository) {}

  async getSales(paginationParameters: PaginationParameters): Promise<Sale[]> {
    return this.salesRepository.getSales(paginationParameters);
  }

  async countSales(): Promise<number> {
    return this.salesRepository.countSales();
  }
}
