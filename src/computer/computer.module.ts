import { Module } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { PowerService } from 'src/power/power.service';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController],
  providers: [DiskService,CpuService,PowerService]
})
export class ComputerModule {}
