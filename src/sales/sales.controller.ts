import { Controller, Get, Query } from '@nestjs/common';
import { PaginationParameters } from './dto/pagination-parameters.dto';
import { Sale } from './sale.schema';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async getSales(
    @Query() getSalesParameters: PaginationParameters,
  ): Promise<Sale[]> {
    return this.salesService.getSales(getSalesParameters);
  }

  @Get('count')
  async countSales(): Promise<number> {
    return this.salesService.countSales();
  }
}
