import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(
        private cpuService: CpuService,
        private diskService: DiskService
    ) { }

    /**
     * run
     */
    @Get()
    public run() {
        console.log('Getting data and computing');
        const result = this.cpuService.compute(1, 3);
        const data = this.diskService.getDada();
        return {
            message:`We got ${data} from disk, spent some energy and computing resulted in ${result}` 
        }
    }
}
